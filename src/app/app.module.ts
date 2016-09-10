import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RecipeBookAppComponent } from "./recipe-book.component";

@NgModule({
  declarations: [RecipeBookAppComponent],
  imports: [BrowserModule],
  bootstrap: [RecipeBookAppComponent]
})
export class AppModule {}
