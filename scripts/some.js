'use strict';

// Array.prototype.some()
// The some() method tests whether at least one element in the array
// passes the test implemented by the provided function.

const someNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const divisibleByThree = someNumbers.filter((number) => number % 3 === 0);
const hasDivisibleByThree = someNumbers.some((number) => number % 3 === 0);

console.log('Array.prototype.some():');
console.log('All numbers:', someNumbers);
console.log('Has divisible by 3:', hasDivisibleByThree);
console.log('Divisible by 3:', divisibleByThree);

