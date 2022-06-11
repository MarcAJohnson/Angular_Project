import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppinglistComponent } from "./shoppinglist/shoppinglist.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes' , pathMatch: 'full'},    
    //pathMatch is needed to tell angular not to match prefixes EX. '' is in every path so it messes things up
    { path: 'recipes', component: RecipesComponent, children: [
        { path: '', component: RecipeStartComponent },
        { path: 'new', component: RecipeEditComponent },
        //new must come before ':id' or else router will try to parse "new" as an id and it will cause erros
        { path: ':id', component: RecipeDetailComponent },
        { path: ':id/edit', component: RecipeEditComponent } 
    ] },
    { path: 'shoppinglist', component: ShoppinglistComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}