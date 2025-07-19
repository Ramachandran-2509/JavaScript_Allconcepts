// sort () method
// The sort() method sorts the elements of an array in place and returns the sorted array.
// The default sort order is according to string Unicode code points.
const numbers = [5, 3, 8, 1, 2];
numbers.sort((a, b) => a - b); // Sorts the array in ascending order
console.log(numbers); // Output: [1, 2, 3, 5, 8]

// some() method
// The some() method tests whether at least one element in the array passes the test implemented by
// the provided function. It returns a Boolean value.

const hasEvenNumber = numbers.some((num) => num % 2 === 0);
console.log(hasEvenNumber); // Output: true (because 2 is even)

// every() method
// The every() method tests whether all elements in the array pass the test implemented by the provided 
// function. It returns a Boolean value.
const allPositive = numbers.every((num) => num%2===0);        

console.log(allPositive); // Output: true (all numbers are positive)