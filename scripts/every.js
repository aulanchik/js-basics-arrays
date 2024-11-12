// Array.prototype.every()
// The every() method tests whether all elements in the array pass the test implemented by the provided function.
// @return result - true or false

//Populate an array with values from 1 to 100
const array = Array.from({ length: 100 }, (_, i) => i + 1);

const isPrime = (num) => {
    if(num <= 1) return false;
    if(num <= 3) return true;
    if(num % 2 === 0 || num % 3 === 0) return false;

    // i * i <= num is a quicker way of writing Math.sqrt(num) <= i
    // we only need to check up to the square root of num
    // we start from 5 and increment by 6 each time
    // because all primes are of the form 6k 1 or 6k - 1
    // see https://en.wikipedia.org/wiki/Primality_test#Naive_methods
    // for more information
    for (let i = 5; i * i <= num; i += 6) {
        // if num is divisible by i or i + 2, then it's not a prime number
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
}

const containsOnlyPrimeNumbers = (arr) => {
    if(!Array.isArray(arr)) {
        throw new Error('Input array cannot be empty');
    }

    return array.every(isPrime);
}

const primeNumbers = array.filter(isPrime);

console.log('Array.prototype.every():');
console.log('Input: ', array);
console.log('Are all numbers in the input array prime? ', containsOnlyPrimeNumbers(array));
console.log('Prime numbers in the input array are:', primeNumbers);
