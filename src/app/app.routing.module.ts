import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { AuthGuard } from "./auth/auth.guard";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipeResolverService } from "./recipes/recipes-resolver.service";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppinglistComponent } from "./shoppinglist/shoppinglist.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes' , pathMatch: 'full'},    
    //pathMatch is needed to tell angular not to match prefixes EX. '' is in every path so it messes things up
    { 
        path: 'recipes', 
        component: RecipesComponent, 
        canActivate: [AuthGuard],
        children: [
            { path: '', component: RecipeStartComponent },
            { path: 'new', component: RecipeEditComponent },
            //new must come before ':id' or else router will try to parse "new" as an id and it will cause erros
            { 
                path: ':id', 
                component: RecipeDetailComponent, 
                resolve: [RecipeResolverService]
            },
            { 
                path: ':id/edit', 
                component: RecipeEditComponent, 
                resolve: [RecipeResolverService]
            } 
        ] 
    },
    { path: 'shoppinglist', component: ShoppinglistComponent },
    { path: 'auth', component: AuthComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}