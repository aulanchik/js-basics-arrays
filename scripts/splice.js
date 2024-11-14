// Array.prototype.splice()
// This function copies selection from the given array from start to end excluding ending element;
// It modifies the original array

// Notes:
// * If you would like to modify segments of an array and keep the original array without mutating it,
// you have to use Array.prototype.toSpliced().
// * If you would like to access specific element of the array without modifying it use Array.prototype.slice().

const elements = [1, 2, 4, 5];

// Store the array state before splice by creating a copy
const beforeSplice = elements.slice();

// Use splice to add 3 at index 2
elements.splice(2, 0, 3);

// Store the array state after splice by creating another copy
const afterSplice = elements.slice();

console.log('Array.prototype.splice():');
console.table([
  { "Description": "Before:", "": JSON.stringify(beforeSplice) },
  { "Description": "After:", "": JSON.stringify(afterSplice) }
]);
