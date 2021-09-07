// this file is an example that uses the library in /lib/

import { Inventory } from "./lib/Inventory";

const inv = new Inventory({
	'apples': 1,
	'coins': 10 
});


inv.addItems({ 'apples': 3 });

inv.getItem('apples');  // => 4

console.log( inv.getItem('apples'); );



