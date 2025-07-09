// hoisting in JavaScript
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of
// their containing scope during the compilation phase. This means that you can use variables and functions before they are declared in the code.

// However, only the declarations are hoisted, not the initializations. This can lead to unexpected behavior if not understood properly.
// Here's an example of hoisting with variables and functions:

console.log(myVar); // undefined
var myVar = 5; // Declaration is hoisted, but initialization is not 
console.log(myVar); // 5

function myFunction() {
    console.log(myFuncVar); // undefined
    var myFuncVar = 10; // Declaration is hoisted, but initialization is not
    console.log(myFuncVar); // 10
}
myFunction();


