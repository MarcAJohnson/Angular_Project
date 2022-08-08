import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipesRoutingModule } from "./recipes-routing.module";
import { RecipesComponent } from "./recipes.component";

@NgModule({
  declarations: [
    //things declared here do no have access to other modules kept in app.module
    //they must be imported down below EXCEPT for services which are application wide
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeEditComponent,
    RecipeStartComponent
  ],
  imports: [
    //When splitting up Modules, we need "browser module" for *ngFor and *ngIf BUT browser module can
    //only be used once for start up reasons... so it stays in app.module
    //Use "commonModule" when splitting up modules to keep access to angular features
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    RecipesRoutingModule,
    SharedModule
  ]
  
})
export class RecipesModule {

}
