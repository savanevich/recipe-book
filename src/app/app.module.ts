import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RecipeBookAppComponent } from "./recipe-book.component";
import { ShoppingListService } from "./shopping-list/shopping-list.service";
import { APP_ROUTES_PROVIDERS } from "./app.routes";

@NgModule({
  declarations: [RecipeBookAppComponent],
  imports: [BrowserModule],
  bootstrap: [RecipeBookAppComponent],
  providers: [ShoppingListService, APP_ROUTES_PROVIDERS]
})
export class AppModule {}
