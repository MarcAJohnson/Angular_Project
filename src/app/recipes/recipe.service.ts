import { EventEmitter, Injectable} from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shoppinglist/shoppinglist.service';
import { Recipe } from "./recipe.model";

@Injectable()

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    constructor(private shoppingListService: ShoppingListService) {}

    private recipes: Recipe[] = [
        new Recipe(
            "Gnocchi", 
            "Chorizo gnocchi with mozarella!", 
            "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=300,272",
            [
                new Ingredient('Chorizo', 1),
                new Ingredient('Mozarella', 3),
                new Ingredient('Gnocchi noddles', 1)
            ]),
        new Recipe(
            "Cavateli", 
            "Ricotta Cavateli with Asparagus!", 
            "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/3/7/0/FNM_040114-Ricotta-Cavateli-With-Asparagus-Recipe-h_s4x3.jpg.rend.hgtvcom.476.357.suffix/1394210818675.jpeg",
            [
                new Ingredient('Asparagus', 1),
                new Ingredient('Ricotta Cheese', 1),
                new Ingredient('Cavateli noodles', 1)
            ])
      ];

    getRecipes() {
        return this.recipes.slice(); // along with setting recipes array as private, 
        //using slice gives a copy of the array so we cannot edit anything from outside
        
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}