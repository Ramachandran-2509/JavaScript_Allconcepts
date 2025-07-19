// reduce() method

// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15


let k=[
    {ename: "Ram", salary: 17000},
    {ename: "Sam", salary: 20000},
    {ename: "John", salary: 25000},
    {ename: "Ravi", salary: 30000}
]

const res =k.reduce((acc,cele)=>{
    return acc+cele.salary
},0).map((salary) => salary * 1); // Assuming you want to multiply each salary by 1
console.log(res); // Output: [17000, 20000, 25000, 30000]