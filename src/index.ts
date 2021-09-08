// Example

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

console.log(inv.getItem('apples'), inv.getItem('coins'));

// You can also remove items:
inv.removeItems({
	'apples': 4,
	'coins': 12
});

inv.getItem('apples');  // => 1
inv.getItem('coins');  //  => 1

console.log(inv.getItem('apples'), inv.getItem('coins'));

// finally, you can get all items at once:

inv.getAllItems(); // => { 1, 1 }

console.log( inv.getAllItems() );