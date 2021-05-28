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
      if (this.items[k]) {
        this.items[k] += itemsToAdd[k];
      } else {
        this.items[k] = itemsToAdd[k];
      }
    }
  }

  getAllItems(): itemDictionary {
    return { ...this.items };
  }

  getItem(name: string): number {
    return this.items[name] ? this.items[name] : 0;
  }
}

interface itemDictionary {
  [key: string]: number;
}

export { Inventory };
