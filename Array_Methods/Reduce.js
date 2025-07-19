// reduce() method

// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15



const res=numbers.reduce((acc, cvalue)=>acc+cvalue, 0);
console.log(res); // Output: 15                                       
