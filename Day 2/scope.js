//  scopes are used to define the visibility of variables in JavaScript.
//  There are two main types of scopes: global scope and local scope.   

//  Global scope refers to variables that are accessible from anywhere in the code, while local scope refers to variables that are only accessible within a specific function or block of code.
//  Variables declared with the `var` keyword have function scope, meaning they are accessible within the function they are declared in. Variables declared with `let` and `const` have block scope, meaning they are only accessible within the block they are declared in.
//  Here's an example of how scopes work in JavaScript:
let globalVar = "I am a global variable";
function myFunction(){
    let localVar = "I am a local variable";
    console.log(globalVar); // Accessible
    console.log(localVar); // Accessible
}
myFunction();
console.log(globalVar); // Accessible


// scope jaining example

var a=10
let b= 20
const c=30

function outerFunction() {
var a=100
let b= 200
const c=300
    function innerFunction() {
        var a=1000
        let b= 2000
        const c=3000
        console.log("Inner Function: ", a, b, c); // 1000, 2000, 3000
    }
    innerFunction();
    console.log("Outer Function: ", a, b, c); // 100, 200, 300function

}
outerFunction();
console.log("Global Scope: ", a, b, c); // 10, 20, 30