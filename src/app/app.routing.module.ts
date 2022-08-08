import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes' , pathMatch: 'full'},
    //pathMatch is needed to tell angular not to match prefixes EX. '' is in every path so it messes things up
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: 'recipes',
        loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipesModule)
    },
    {
        path: 'shoppinglist',
        loadChildren: () => import('./shoppinglist/shoppinglist.module').then(m => m.ShoppinglistModule)
    }
];

//Every module can only use created components in itself. So here we import appRoutes module and then 
//export the whole module to be used inside of another module
//Everything appModule imports(RouterModule) recieves whatever that module exports
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })
        //after implementing lazy loading routes - "loadChildren()", using preloadingStrategy allows
        //angular app to load modules when user is idle or isn't downloading things so it's optimizes
        //the stress on the application
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {

}