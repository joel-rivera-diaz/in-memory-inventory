in-memory-inventory
===================

A simple in-memory inventory system. The library is designed to keep track of quantities. 

Usage
-----
Include the library in you **typeScript** project. Use its API as shown in the below example:

Examples
--------
### Example #1
```js
// import the library

import { Inventory } from "./lib/Inventory";

// create an Inventory instance. You can initialize it with any amount of items

const inv = new Inventory({
	'apples': 1,
	'coins': 10 
});


inv.addItems({ 'apples': 3 });

inv.getItem('apples');  // => 4

```
