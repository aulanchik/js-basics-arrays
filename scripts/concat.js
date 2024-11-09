'use strict';

// Array.prototype.concat() creates and returns an array with all of the elements
// of the first array followed by all of the elements of the second array.

const people = ['John', 'Paul', 'George', 'Ringo'];
const people2 = ['Pete', 'Ann'];
const newPeople = people.concat(people2);

console.log('Array.prototype.concat():');
console.log('Concat result: ', newPeople);
