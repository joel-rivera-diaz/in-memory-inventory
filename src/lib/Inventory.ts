import { Item } from "./Item";

class Inventory {
  items: Array<Item>;

  constructor(initialItems: Array<Item>) {
    this.items = initialItems;
  }

  add(items: Array<Item>) {
    for (const item of items) {
    }
  }
  // add( name: String, quantity: Number ){

  // }

  itemExists(item: Item) {
    for (const existingItem of this.items) {
      if (item.name === existingItem.name) {
        return true;
      }
    }
    return false;
  }
}

export { Inventory };
