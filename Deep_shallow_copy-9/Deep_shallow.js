// primitive value


// deep opy
// let a=20
// let b=a

// a=40

// console.log(a,b)


// non primitive values

// let obj1={name:"Rahul",age:20}
// let obj2={...obj1}
// obj2.name="Ramachandran"

// console.log(obj1,obj2)

//  let obj1={
//     name:"Rahul",
//     age:20,
//     hobbies:{
//         sport:"Cricket",
//         music:"Singing"
//     }
// }

// let obj2={...obj1, hobbies:{...obj1.hobbies}}

// obj1.name="Raju"
// obj1.hobbies.sport="Football"
// console.log(obj1,obj2)



// another way to create deep copy


//  let obj1={
//     name:"Rahul",
//     age:20,
//     hobbies:{
//         sport:"Cricket",
//         music:"Singing"
//     }
// }

// let obj2=JSON.parse(JSON.stringify(obj1))
// console.log(obj2)



// array shall copy

// let k=[2,4,5,[8,9,10]]
// let l=[...k]
// console.log(l,k)


 // deep copy

// let obj2=JSON.parse(JSON.stringify(k))
// obj2[3][1]='one'
// console.log(obj2,k)