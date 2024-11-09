'use strict';

// Array.prototype.filter()
// filter - used to filter an array through a function.
// It creates a new array that includes only those elements from the original array
// for which the callback(item, i, arr) returns true.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter((number) => number % 2 === 0);

console.log('Array.prototype.filter():');
console.log('All numbers:', numbers);
console.log('Only even numbers:', evenNumbers);


const lessons = [
  {
    title: 'JavaScript Array methods in depth - join',
    views: 960,
    tags: ['array', 'join']
  },
  {
    title: 'JavaScript Array methods in depth - concat',
    views: 1050,
    tags: ['array', 'concat']
  },
  {
    title: 'JavaScript Array methods in depth - slice',
    views: 2503,
    tags: ['array', 'slice']
  },
  {
    title: 'JavaScript Array methods in depth - bind',
    views: 2500,
    tags: ['array', 'bind']
  }
];

const results = lessons
  .filter(x => x.tags.indexOf('array') !== -1)
  .filter(x => x.views > 1000)
  .sort((a, b) => b.views - a.views)
  .map(x => x.title);

console.log('Array.prototype.filter()');
console.log('Filtered by two criterias and sorted in ascending order:', results);
