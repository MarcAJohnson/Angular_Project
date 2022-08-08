import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListService } from './shoppinglist/shoppinglist.service';
import { AppRoutingModule } from './app.routing.module';
import { RecipeService } from './recipes/recipe.service';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { SharedModule } from './shared/shared.module';

@NgModule({
  //an array of all components / directives / and custom pipes
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  //imports other modules into this module and add created modules
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule
  ],
  //services that will be injected OR use "providedIn: 'root'" tag in Injectable()
  providers: [
    ShoppingListService,
    RecipeService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  //starting root component: RARELY HAVE MORE THAN ONE
  bootstrap: [AppComponent]
})
export class AppModule {}
