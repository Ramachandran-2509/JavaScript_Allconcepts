// functions are reusable blocks of code that perform a specific task.
// They can take inputs (parameters) and return outputs (return values).
 
// Functions can be defined in several ways in JavaScript:

// // Function declaration
// function add(a, b) {        
//     return a + b;
// }   
// // Function expression
// const subtract = function(a, b) {   
//     return a - b;
// }                   
// // Arrow function
// const multiply = (a, b) => {  
//     return a * b;
// }
// // Function with default parameters
// function divide(a, b = 1) {     
//     return a / b;
// }
// // Function with rest parameters
// function sum(...numbers) {  
//     return numbers.reduce((acc, num) => acc + num, 0);
// }
// // Function with callback
// function processArray(arr, callback) {  
//     return arr.map(callback);
// }   
// // Example callback function
// function square(num) {
//     return num * num;
// }




// function types are named functions that can be called by their name.
    //1. named function

//     function greet(name){
//         console.log("Hello, " + name + "!");
//     }

// greet("Ram")


// // 2. anonymous function

// const add= function(a,b){
//     return a+b;
// }

// console.log(add(50,10))


// // 3. arrow function
// const multiply = (a, b) => {
//     return a * b;
// }
// console.log(multiply(50,10))




// higher order functions are functions that take other functions as arguments or return functions as their result.

 // 1. Function that takes another function as an argument
// function processArray(arr, callback) {
//     return arr.map(callback);
// }
// Example callback function
// function square(num) {
//     return num * num;
// }   
// Example usage
// const numbers = [1, 2, 3, 4, 5];

// const squaredNumbers = processArray(numbers, square);
// console.log(squaredNumbers); // [1, 4, 9, 16, 25]



// 2. Function that returns another function
// function createMultiplier(factor) {
//     return function(num) {
//         return num * factor;
//     };
// }

// // Example usage
// const double = createMultiplier(2); 
// const triple = createMultiplier(3);
// console.log(double(5)); // 10



// function squarearray(arr, callback) {
//    return arr.map( callback);
// }

// function square(num){
//     return num * num;
// }

// const numb=   [1, 2, 3, 4, 5];

// const result = squarearray(numb, square);
// console.log(result); // [1, 4, 9, 16,



// function add(callback) {
//     console.log(callback(4,5))
// }
//  function sub (a, b) {
//         return a + b 
//     };
// add(sub); // This will call the add function and pass the sub function as a callback

