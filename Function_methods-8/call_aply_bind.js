// let emp={
//     ename:"Ram",
//     eage:28
//     }

// let emp1={
//     ename:"Ramachandran",
//     eage:28,
//     empDetails:function(a,b){
//         // console.log(a*b)
//         console.log("Employee Name is "+this.ename+" and Employee Age is "+this.eage + " " + (a+b) )
//         return (a*b)
//     }
// }


// emp1.empDetails.call(emp, 20, 30)

// emp1.empDetails.apply(emp, [20, 30])

// let res= emp1.empDetails.bind(emp, 20, 30)
// console.log(res())