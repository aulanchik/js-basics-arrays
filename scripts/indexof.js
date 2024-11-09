'use strict';

// Array.prototype.indexOf() returns the first index at which a given element
// Retuns index number if it's present, otherwise returns -1

const family = ['John', 'George', 'Ringo', 'Susan', 'Pete', 'Ann'];

console.log('Array.prototype.indexOf()');
console.table({ IndexOf: family.indexOf('Ringo'), Element: 'Ringo' });
console.table({ IndexOf: family.indexOf('Andrew'), Element: 'Andrew'  });

family.push('Andrew');

console.table({ IndexOf: family.indexOf('Andrew'), Element: 'Andrew' });
