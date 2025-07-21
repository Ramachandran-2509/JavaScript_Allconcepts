// this keyword is used to access the current object
// it is used to call methods of the current object 
// it is used to access the properties of the current object

// let emp={
//     ename:"Ramachandran",
//     eage:28,
//     empId:101,
//     empDetails:function(a,b){
//         console.log(a*b)
//         console.log("Employee Name is "+this.ename+" and Employee Age is "+this.eage)
//     }
// }


// while we using arrow function it's refer to window object.
// undecalred variable is refer to window object
// var for window object and let and const ae block scope can't accessable

// ename="Ram"
// eage=28

// let emp1={
//     ename:"Ramachandran",
//     eage:28,
//     empId:101,
//     empDetails:(a,b)=>{
//         console.log(a*b)
//         console.log("Employee Name is "+this.ename+" and Employee Age is "+this.eage)
//     }
// }


// emp1.empDetails(10,20)