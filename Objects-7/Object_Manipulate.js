// Object.create() method
// The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.
// It allows for the creation of objects with a specified prototype object and properties.
    
// let obj={
//     lname: "Ram",
//     age: 28,
//     occupation: "Fullstack Developer"
// }
// console.log(obj); // { lname: 'Ram', age: 28, occupation: 'Fullstack Developer' }

// let newObj=Object.create(obj)
// newObj.Salary="750000"
// console.log(newObj.__proto__); // {}
// console.log(newObj.lname); // Ram


// object.assign() method
// The Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object.
// It returns the target object after copying the properties.
 
// let obj1 = {
//     name: "Ram",
//     age: 28,
//     occupation: "Fullstack Developer"
// }

// Object.assign(obj1, {salary: 750000, city: "Chennai"})
// console.log(obj1); // { name: 'Ram', age: 28, occupation: 'Fullstack Developer', salary: 750000, city: 'Chennai' }



// object.entries() method
// The Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
// It is useful for iterating over the properties of an object in a key-value pair format.

//  let obj2 = {
//         name: "Ramachandran",
//         age: 28,
//         role: "Backend Developer"
//     }
// let entries = Object.entries(obj2);
// console.log(entries); // [ [ 'name', 'Ramachandran' ], [ 'age', 28 ], [ 'role', 'Backend Developer' ] ]


// object.fromEntries() method
// The Object.fromEntries() method transforms a list of key-value pairs into an object.


// let entries2 = Object.fromEntries(entries)
// console.log(entries2)

//object.keys() 

// The Object.keys() method returns an array of a given object's own enumerable property names.
// let obj3 = {
//     name: "Ramachandran",
//     age: 28,
// }
// let keys = Object.keys(obj3); 
// console.log(keys)


// object.values
//  let keys1 = Object.values(obj3); 
//  console.log(keys1)


// object.freeze()
// The Object.freeze() method freezes an object, preventing new properties from being added to it and preventing
// existing properties from being removed or changed.
//  let obj4 = {
//      name: "Ramachandran",
//     age: 28,
//     occupation: "Backend Developer"
// }
// Object.freeze(obj4)
// obj4.name = "Ramu"
// console.log(obj4)
