import { Component } from '@angular/core';

import { HeaderComponent } from './header.component';
import { RecipesComponent } from './recipes';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

@Component({
  moduleId: module.id,
  selector: 'recipe-book-app',
  templateUrl: 'recipe-book.component.html',
  styleUrls: ['recipe-book.component.css'],
  directives: [HeaderComponent, RecipesComponent, ShoppingListComponent]
})
export class RecipeBookAppComponent {
}
