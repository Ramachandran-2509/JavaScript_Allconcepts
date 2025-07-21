// camel case(which `is used in JavaScript) is a naming convention in which the first letter of the first word is lowercase, and the first letter of each subsequent concatenated word is capitalized.
// For example: `myVariableName`.
// Pascal case is similar to camel case, but the first letter of the first word is also capitalized. 
// For example: `MyVariableName`.
// under case is a naming convention in which all letters are lowercase and words are separated by underscores. 
// For example: `my_variable_name`.



// concepts redeclaration, reassignment, and printing statements in JavaScript

// var:

// var age// variable declaration
// age = 20; // variable assignment
// var age = 20; // variable declaration and assignment
// var age ="ram"; // variable reassignment
// console.log(age); // printing the variable value


// let:
// let age1/// variable declaration
// age1 = 20; // variable assignment   
 // let age1 = 20; // variable declaration and assignment not possible right 
// age1 = "ram"; // variable reassignment


// const:

// const age2 = 20; // variable declaration and assignment
// const age2 = 20; // variable declaration and assignment not possible right
// age2 = "ram"; // variable reassignment not possible right
// console.log(age2); // printing the variable value



// // printing statements in JavaScript
// console.log("Hello World"); // printing a string
// alert("Hello World"); // alert box
// document.write("Hello World"); // writing to the document
// console.log(10 + 20); // printing the result of an expression




// Data types in JavaScript
// 1. Primitive data types
// - Number: Represents numeric values, both integers and floating-point numbers.
// - String: Represents a sequence of characters, enclosed in single or double quotes.
// - Boolean: Represents a logical value, either true or false.
// - Undefined: Represents a variable that has been declared but not assigned a value.
// - Null: Represents the intentional absence of any object value.
// - Symbol: Represents a unique and immutable value, often used as object property keys.
// - BigInt: Represents integers with arbitrary precision, useful for very large numbers.

// 2. Non-primitive data types
// - Object: Represents a collection of key-value pairs, where keys are strings (or Symbols) and values can be of any data type.
// - Array: A special type of object that represents an ordered collection of values, which can be of any data type.


// Operators are special symbols that perform operations on variables and values. JavaScript has several types of operators, including:
// 1. Arithmetic Operators: Used to perform mathematical operations like addition, subtraction, multiplication,
// division, and modulus.
// 2. Assignment Operators: Used to assign values to variables, such as `=`, `+=`, `-=`, `*=`, `/=`, and `%=`.
// 3. Comparison Operators: Used to compare two values and return a boolean result, such as `==`, `===`, `!=`, `!==`, `<`, `>`, `<=`, and `>=`.
// 4. Logical Operators: Used to perform logical operations, such as `&&` (AND), `||` (OR), and `!` (NOT).
// 5. Bitwise Operators: Used to perform operations on binary representations of numbers, such as `&`, `|`, `^`, `~`, `<<`, `>>`, and `>>>`.


// Arithmetic Operators
// console.log(20/2)
// console.log(20%2)     // modulus operator
// console.log(20**2)    // multiplication operator



// post pre increment 

// let a = 30;
// let b=a++;   // post increment
// let b=++a;       // pre increment

//  let c1 = a++ + a++
// let c2 = ++a + ++a; // pre increment  // 31+32 = 63,32
// console.log(a,c2);



// pre post decrement

//  let c = 10;
// let d=--c;   // pre decrement
//let d=c--;      // post decrement
// console.log(c,d);



// let k=20

// if(k>20){
//     console.log("k is greater than 20");
// }   else if(k<20){
//     console.log("k is lesssssss than 20");
// } else{
//     console.log("k is equal to 20");
// }


// let age= 21;

// console.log(age >= 18 ? "You are an adult" : "You are a minor"); // Ternary operator

// console.log(age >= 18 &&  age <= 60 ? "You are an adult" : "You are a minor"); // Logical AND operator



//  concatenation in JavaScript

// let firstName = "John";
// let lastName = "Doe";
// let fullName = firstName + " " + lastName; // Using the + operator
// console.log(fullName); // Output: John Doe



// Template literals in JavaScript


// let firstName = "John";
// let lastName = "Doe";
// let fullName = `${firstName} ${lastName}`; // Using template literals
// console.log(fullName); // Output: John Doe



// type conversion in JavaScript

// 1. Implicit Type Conversion (Coercion)
// let num = 10;
// let str = "5";
// let result = num + str; // Implicitly converts num to string
// console.log(result); // Output: "105" (string concatenation)


// 2. Explicit Type Conversion
// let num = 10;    
// let str = "5";
// let result = num + Number(str); // Explicitly converts str to number     
// console.log(result); // Output: 15 (number addition)



console.log(5 !== 6); // false