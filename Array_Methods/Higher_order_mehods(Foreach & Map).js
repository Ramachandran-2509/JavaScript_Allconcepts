// higher order methods are methods that 
// take a function as an argument or return a function as a result. 
// They are used to perform operations on arrays in a more functional programming style.
// Some common higher order methods include forEach, map, filter, reduce, and find.



// forEach() method
const numbers = [1, 2, 3, 4, 5]; 
numbers.forEach((number) => {
    console.log(number); // Output: 1, 2, 3, 4, 5
});

// map() method
const doubled = numbers.map((number) => number * 2); // Creates a new array with each element doubled
console.log(doubled); // Output: [2, 4, 6, 8, 10]



// const people = [
//   { name: "Ram", age: 17 },
//   { name: "Sam", age: 20 },
//   { name: "John", age: 25 },
// ];


const names = ["ram", "sam", "john"];
const capitalized = names.map(
  (name) => name.charAt(0).toUpperCase() + name.slice(1)
);
console.log(capitalized); // ["Ram", "Sam", "John"]
