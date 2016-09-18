import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RecipeBookAppComponent } from "./recipe-book.component";
import { ShoppingListService } from "./shopping-list/shopping-list.service";
import { APP_ROUTES_PROVIDERS } from "./app.routes";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule, HTTP_PROVIDERS } from "@angular/http";

@NgModule({
  declarations: [RecipeBookAppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  bootstrap: [RecipeBookAppComponent],
  providers: [ShoppingListService, APP_ROUTES_PROVIDERS]
})
export class AppModule {}
