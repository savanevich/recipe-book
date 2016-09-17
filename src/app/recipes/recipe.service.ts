import { Injectable } from '@angular/core';

import { Recipe } from './recipe';
import { Ingredient } from '../shared/ingredient';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Dummy', 'Dummy', 'http://world-sewing-machines.ru/image/cache/data/Mydouble/Lady_valet-w-1100x1100.jpg', [
      new Ingredient('Dummy', 1),
      new Ingredient('Smth', 2)
    ]),
    new Recipe('Hamburger', 'Simple hamburger', 'http://gusilebedi.com.ua/Dishes/1442248833.png', [
      new Ingredient('Meat', 1),
      new Ingredient('Bread', 2),
      new Ingredient('Cheese', 1)
    ])
  ];

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }
}
