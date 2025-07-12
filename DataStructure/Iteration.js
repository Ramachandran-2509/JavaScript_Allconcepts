// We have covered three types of iteratio in js
// 1. for loop
// for of loop
// for in loop


// 1. for loop

// let arr = [1, 2, 3, 4, 5];

// // let length = arr.length;

// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// console.log("For loop completed");


// let arr1= "Javascript"

// for(let i=0; i<arr1.length; i++){
//     console.log(arr1[i]);
// }



// 2. for of loop


// let arr= [1, 2, 3, 4, 5];

// for(let val of arr){
//     console.log(val);
// }


// let arr1= "Developer";

// for(let char of arr1){
//     console.log(char);
// }

// forof loop is used for function also right?

// generator function

// function* generatorFunction() {
//     yield "Ram";
//     yield "Full Stack Developer";
//     yield "JavaScript";
// }

// let res= generatorFunction();

// for(let val of res){
//     console.log(val);
// }





// for in loop


// let obj = {    
//     name: "Ram",
//     age: 25,
//     city: "Delhi"
// };
// for (let key in obj){
//     console.log(`${key}: ${obj[key]}`);
// }



// Example of for in loop with array

// const users = ["Ram", "Priya", "Arun"];
// for (let i = 0; i < users.length; i++) {
//   console.log(`${i + 1}. ${users[i]}`);
// }



// for...in loop (for objects):


// const user = { name: "Ram", age: 28, role: "Developer" };
// for (let key in user) {
//   console.log(`${key}: ${user[key]}`);
// }


// for...of loop (for iterables like arrays, strings, Maps, Sets):


// const users = ["Ram", "Priya", "Arun"];
// for (let name of users) {
//   console.log(name);
// }




// const users = [
//   {
//     name: "Ram",
//     age: 25,
//     roles: ["Admin", "Editor"],
//     address: { city: "Chennai", country: "India" }
//   },
//   {
//     name: "Priya",
//     age: 28,
//     roles: ["Viewer"],
//     address: { city: "Bangalore", country: "India" }
//   }
// ]


  const users = [
    {
      id: 1,
      name: "Ram",
      age: 25,
      roles: ["Admin", "Editor"],
      address: { city: "Chennai", country: "India" },
    },
    {
      id: 2,
      name: "Priya",
      age: 28,
      roles: ["Viewer"],
      address: { city: "Bangalore", country: "India" },
    },
    {
      id: 3,
      name: "Arun",
      age: 30,
      roles: ["Admin", "Viewer"],
      address: { city: "Hyderabad", country: "India" },
    },
  ];


//   for(let i=0; i<users.length; i++){
//     console.log(`${i+1}. ${users[i].name}`);
//   }


// for (let i = 0; i < users.length; i++) {
//   console.log(`${i + 1}. ${users[i].name}`);
// }

const user = users[2];
// for (let key in user) {
//   console.log(`${key}: ${user[key]}`);
// }

for (let role of user.roles) {
  console.log(`Role: ${role}`);
}

// for (let role of user.roles) {
//   console.log(role);
// }
