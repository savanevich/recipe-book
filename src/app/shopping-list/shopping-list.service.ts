import { Ingridient } from "../shared/ingridient";

export class ShoppingListService {
  private  items: Ingridient[] = [];

  getItems() {
    return this.items;
  }

  addItems(items: Ingridient[]) {
    Array.prototype.push.apply(this.items, items);
  }
}
