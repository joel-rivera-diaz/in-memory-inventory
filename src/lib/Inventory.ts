/**
 * @class Inventory
 * This class keeps track of Items *quantities*
 */
class Inventory {
  items: itemDictionary;

  constructor(initialItems: itemDictionary) {
    this.items = initialItems;
  }

  addItems(itemsToAdd: itemDictionary) {
    for (let k of Object.keys(itemsToAdd)) {
      if (itemsToAdd[k]) {
        this.items[k] += itemsToAdd[k];
      } else {
        this.items[k] = itemsToAdd[k];
      }
    }
  }
  addItem(name: string, quantity: number) {}
}

interface itemDictionary {
  [key: string]: number;
}

export { Inventory };
