'use strict';

// Array.prototype.reduce()
// The reduce() method executes a reducer function on each element of the array
// resulting in a single output value

const reduceNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = reduceNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log('Array.prototype.reduce():');
console.log('All numbers: ', reduceNumbers);
console.log('Sum: ', sum);
