import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from "@angular/router";

import { HeaderComponent } from './header.component';
import { RecipeService } from "./recipes/recipe.service";


@Component({
  moduleId: module.id,
  selector: 'recipe-book-app',
  templateUrl: 'recipe-book.component.html',
  styleUrls: ['recipe-book.component.css'],
  directives: [HeaderComponent, ROUTER_DIRECTIVES],
  providers: [RecipeService]
})
export class RecipeBookAppComponent {
}
