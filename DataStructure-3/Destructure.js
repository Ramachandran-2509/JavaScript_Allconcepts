// destructure are used to unpack values from arrays or properties from objects 
// into distinct variables. This is a convenient way to extract 
// multiple values from data structures in a concise manner.

// let k=[1, 2, 3, 4, 5];

// // let [a, b, c, d, e] = k;// destructuring assignment

// let [a, , , , e] = k

// console.log(a, e); // 1 2 3


// rest operator in destructuring


// let num1= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let [a,b, ...rest]  = num1; // rest operator

// console.log(...rest); // 1


 // destructuring in objects
// let obj = {
//     name1: "Ram",
//     age: 25,
//     city: "Delhi",
//     country: "India"
// };
// let { name1, age, city, country } = obj; // destructuring assignment 
// console.log(name1, age, city, country); // Ram 25 Delhi India


let k=[1,2,3,[4,5,[6,7],8,9]];
let [a, b, c, [d, e, [f, g], h, i]] = k; // destructuring assignment with nested arrays
console.log(a, b, c, d, e, f, g, h, i); // 1 2 3 4 5 6 7 8 9