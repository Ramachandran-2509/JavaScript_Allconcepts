// spread operator are used to expand an iterable (like an array) into more elements.

// rest operator are used to collect multiple elements and condense them into a single element.

// Array

// let k=[ "Ram", "Full Stack Developer", "JavaScript", "React", "Node.js"];
// let p=[ "Python", "Django", "Flask"];

// let res=[...k,...p,'SQL']; // spread operator
// console.log(res); // ["Ram", "Full Stack Developer", "JavaScript", "React", "Node.js"]



// Object

//  let obj1 = { name: "Ram", age: 25 };
//  let obj2 = { city: "Delhi", country: "India" };

//  let res={...obj1 , ...obj2, Designation:'Developer'}; // spread operator
//     console.log(res); // { name: "Ram", age: 25, city: "Delhi", country: "India", isEmployed: true }



// Rest parameter


function sum(a,b, ...args){
    console.log(a, b, args); // [1, 2, 3, 4, 5]
}
sum(1, 2, 3, 4, 5); // rest operator