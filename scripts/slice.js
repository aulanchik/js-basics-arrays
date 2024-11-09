'use strict';

// Array.prototyp.splice()
// This function copies selection from the given array from start to end excluding ending element;

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const slicedNumbers = number.slice(2, 6);

console.log('Array.prototype.slice():');
console.table({ 'All numbers': number });
console.table({ 'Sliced numbers': slicedNumbers });
