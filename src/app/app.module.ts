import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RecipeBookAppComponent } from "./recipe-book.component";
import { ShoppingListService } from "./shopping-list/shopping-list.service";

@NgModule({
  declarations: [RecipeBookAppComponent],
  imports: [BrowserModule],
  bootstrap: [RecipeBookAppComponent],
  providers: [ShoppingListService]
})
export class AppModule {}
