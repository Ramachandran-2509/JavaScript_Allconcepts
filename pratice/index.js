// let age=17
// if(age>20){
//     console.log("Welcome back")
// }
// else{
//     console.log("Not welcome")
// }

// let age=27 // > greater than // < less thann

// console.log(age >= 18 ? "You are an adult" : "You are a minor"); // Ternary operator

// if(age<=25){
//     console.log("You are young")
// }
// else{
//     console.log("You are old")
// }

// concation

// let k="Ram"
// let r="Developer"
// console.log(k + " " + r); // Ram Developer

// template literals

// console.log(`${k} ${r} very soon`); // Ram Developer

// type conversion

// let k=25
// let p='20'

// console.log(k+p)
// let res= k + parseInt(p)
// console.log(res)

// console.log(5!==5)

// for(i=0; i<5; i++){
//     console.log(i)
// }

// let k=[1,2,3,4]  // 10

// let res=k.reduce((acc, cele)=>{
//     console.log( acc+cele)
// },0)

// console.log(res)
//  let k=1234
// let total=0
// while(k>0){
//     let digit=k%10
//     k= parseInt(k/10)
//     total+=digit
// }

// console.log(total)

// let r=k/10
// console.log(r)

// let j=1

// do{
//     console.log("Hello World " + j);
//     j++;
// }
// while(j<=10) console.log("Loop ended");

// for of loop not support for object

// let k=[2,5,7,9]
// let p='Developer'
// for(let i of p){
//     console.log(i)
// }

// let o={
//     ename:"Ram",
//     role:"Developer"
// }

// for(let key in o){
//     console.log(`${key} ${o[key]}`)
// // }

// for(let i in k){
//     console.log(i)
// }

let newPromise = new Promise((resolve, reject) => {
  let data = true;

  if (data) {
    resolve("Data Received");
  } else {
    reject("Data Not Received");
  }
});

newPromise
  .then((msg) => {
    console.log(msg)
    return `next message: ${msg}`;
  })
  .then((nextmsg) => {
    console.log(nextmsg);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("All done");
  });
