
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { ShoppingeditComponent } from "./shoppingedit/shoppingedit.component";
import { ShoppinglistComponent } from "./shoppinglist.component";

@NgModule({
  declarations: [
    ShoppinglistComponent,
    ShoppingeditComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: '', component: ShoppinglistComponent }
    ]),
    SharedModule,
    FormsModule
  ]
})

export class ShoppinglistModule {}