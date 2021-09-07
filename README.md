in-memory-inventory
===================

A simple in-memory inventory system. The library is designed to keep track of quantities. 

Usage
-----
Include the library in you **typeScript** project. Use its API as shown in the below example:

Example
--------
```js
// import the library
import { Inventory } from "./lib/Inventory";

// create an Inventory instance. You can initialize it with any amount of items
const inv = new Inventory({
	'apples': 1,
	'coins': 10 
});

//  here, you're adding 3 apples:
inv.addItems({ 'apples': 3 });

// .. but you can add as many items as you wish in a sigle call:
inv.addItems({ 
	'apples': 1,
	'coins': 3 
});

inv.getItem('apples');  // => 5
inv.getItem('coins');  //  => 13


```

API
---
**Class Inventory**
Public Methods:
- **addItems()** - params: <Object> , items you wish to add. Each property represents a different item.
- **getItem()** - params: <String>, the item name you want to get. Returns the amount.
- **getAllItems()** -params: none. Returns an <Object> with all items.


