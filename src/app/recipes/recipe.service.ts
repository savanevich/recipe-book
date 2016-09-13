import { Injectable } from '@angular/core';

import { Recipe } from './recipe';
import { Ingridient } from './../shared/ingridient';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Dummy', 'Dummy', 'http://world-sewing-machines.ru/image/cache/data/Mydouble/Lady_valet-w-1100x1100.jpg', [
      new Ingridient('Dummy', 1),
      new Ingridient('Smth', 2)
    ]),
    new Recipe('Hamburger', 'Simple hamburger', 'http://gusilebedi.com.ua/Dishes/1442248833.png', [
      new Ingridient('Meat', 1),
      new Ingridient('Bread', 2),
      new Ingridient('Cheese', 1)
    ])
  ];

  getRecipes() {
    return this.recipes;
  }
}
