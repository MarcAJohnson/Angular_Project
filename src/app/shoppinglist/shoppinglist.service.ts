import { Subject } from 'rxjs';
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {

    ingredientsChanged = new Subject<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
      ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        // for (let ingredient of ingredients) {            VIABLE OPTION BUT POSSIBLY
        //     this.addIngredient(ingredient);              ALOT OF EVENTS EMITTED
        // }

        this.ingredients.push(...ingredients); 
        //... operator(spread) used to change an array into a list so each ingredient can
        //be added to an array as individual elements instead of a complete array

        this.ingredientsChanged.next(this.ingredients.slice());
                                            
    }

}