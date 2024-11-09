'use strict';

// Array.prototype.includes()
// The includes() method determines whether an array includes a certain element, returning true or false as appropriate.
// Note: Array.prototype.flat() returns a new array with all sub-array elements concatenated into it and then flattened into a new array.
// Note 2: The flat() method is capable of removing empty slots from the array.

const shoppingList = ['milk', 'eggs', 'bread', ['apple', 'banana'], 'chocolate', 'yogurt', [['toothpaste', 'shampoo'], ['shaving cream', 'deodorant']]];

console.log('Array.prototype.flat():');
console.log('Shopping list: ', shoppingList);
console.log('Flat shopping list: ', shoppingList.flat(2));

const shoppingList2 = [, , 'milk', 'eggs', 'bread', ['apple', 'banana'], 'chocolate', 'yogurt', [, , ['shaving cream', 'deodorant']]];

console.log('Shopping list 2: ', shoppingList2);
console.log('Flat shopping list 2: ', shoppingList2.flat(2));
