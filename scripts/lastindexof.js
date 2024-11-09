'use strict';

// Array.prototype.lastIndexOf()
// lastIndexOf() attempts to search for specified string term
// It returns the last index of occurrence of the term
// If the term is not found, then -1 is returned instead

const quotes = [
    'The way to get started is to quit talking and begin doing.',
    'The pessimist says that the future is not fully predictable',
    'The optimist says that the future is not always in the past',
    'The supervisor says that the future is always in the past.',
]

const searchTerm = quotes[2];
const lastIndex = quotes.lastIndexOf(searchTerm);

console.log('Array.prototype.lastIndexOf():');
console.log({ SearchTerm: searchTerm, LastIndexOf: lastIndex });
