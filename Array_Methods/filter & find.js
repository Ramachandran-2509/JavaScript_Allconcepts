const employees = [
  { name: "Alice", salary: 60000 },
  { name: "Bob", salary: 55000 },
  { name: "Charlie", salary: 70000 }
];

// filter() method
const higersalaries = employees.filter((emp)=>emp.salary>=60000)
console.log(higersalaries); // Output: [{ name: "Alice", salary: 60000 }, { name: "Charlie", salary: 70000 }]


// find() method
const higersalaries1 = employees.find((emp)=>emp.salary>=60000)
console.log(higersalaries1)