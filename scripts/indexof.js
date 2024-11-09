'use strict';

// Array.prototype.indexOf() returns the first index at which a given element
// Retuns index number if it's present, otherwise returns -1

const family = ['John', 'George', 'Ringo', 'Susan', 'Pete', 'Ann'];

console.log('Array.prototype.indexOf()');
console.log('Family: ', family);
console.log({ 'Family member': 'Ringo', IndexOf: family.indexOf('Ringo') });
console.log({ 'Family member': 'Andrew', IndexOf: family.indexOf('Andrew') });
