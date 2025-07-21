
// currying is a functional programming technique where a function with multiple arguments is transformed into a sequence of functions,
//  each taking a single argument.

// function add(a){
//     return function(b){
//         return function (c){
//             return a + b + c;
//         }
//     }
// }
// console.log(add(1)(2)(3)); // Output: 6



// // self invoking function

// (function(a, b){
//     console.log(a + b);
// })(5, 10); // Output: 15



// closure are functions that have access to their own scope, 
// the outer function's scope, and the global scope. 
// They are created when a function is defined inside another function.


// function outerFunction() {
//     let outerVariable = 'I am from outer function';

//     function innerFunction() {
//         console.log(outerVariable);
//     }

//     return innerFunction;
// }

// const closureFunction = outerFunction();

// closureFunction(); // Output: I am from outer function

     