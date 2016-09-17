import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RecipeBookAppComponent } from "./recipe-book.component";
import { ShoppingListService } from "./shopping-list/shopping-list.service";
import { APP_ROUTES_PROVIDERS } from "./app.routes";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [RecipeBookAppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [RecipeBookAppComponent],
  providers: [ShoppingListService, APP_ROUTES_PROVIDERS]
})
export class AppModule {}
