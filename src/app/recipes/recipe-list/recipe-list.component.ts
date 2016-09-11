import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from './../recipe';
import { RecipeItemComponent } from './recipe-item.component';

@Component({
  moduleId: module.id,
  selector: 'rb-recipe-list',
  templateUrl: 'recipe-list.component.html',
  directives: [RecipeItemComponent]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Dummy', 'Dummy', 'http://world-sewing-machines.ru/image/cache/data/Mydouble/Lady_valet-w-1100x1100.jpg', []),
    new Recipe('Hamburger', 'Simple hamburger', 'http://gusilebedi.com.ua/Dishes/1442248833.png', [])
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
