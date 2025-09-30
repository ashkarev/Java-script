// nested array
const employees = [
  [1000, "John Mathew", "Developer", "Kochi", 60000, 2],
  [1001, "Rahul Das", "QA Tester", "Kochi", 500000, 2],
  [1002, "Sneha Raj", "Automation Tester", "Tvm", 550000, 3],
  [1003, "Arjun ks", "Data Engineer", "Kochi", 85000, 5],
  [1004, "Alan George", "Developer", "Kochi", 80000, 4],
  [1005, "Maya Thomas", "Developer", "Tvm", 75000, 3],
  [1006, "Abdulla ks", "DevOps Engineer", "Tvm", 80000, 4],
  [1007, "Vivek pp", "Cloud Architect", "Kochi", 95000, 6],
  [1008, "Sophia James", "Developer", "Tvm", 70000, 3],
  [1009, "Riya Paul", "System Analyst", "Tvm", 70000, 3],
];

// 1. print all employee name

employees.forEach((eachEmployeee) => console.log(eachEmployeee[1]));

// 2. print total number of employee
console.log(employees.length);

// 3. print developer employee details

newArray = employees.filter((Element) => Element[2] == "Developer");
console.log(newArray);

// 4. print employees whose salary > 75000

newArray = employees.filter((element) => element[4] > 75000);
console.log(newArray);
// 5. print details of employee Vivek pp

newArray = employees.filter((element) => element[1] == "Vivek pp");
console.log(newArray);

// 6. Sort employee based on their salary in descending order
newArray = employees.sort((a, b) => a[4] - b[4]);

console.log(newArray);
// 7. Sort employee based on their experience in ascending order

newArray = employees.sort((a, b) => b[5] - a[5]);

console.log(newArray);

// 8. print total salary of all employees
let sum = 0;
// newArray=employees.map((element)=>element[4]+sum)
// console.log(newArray)
employees.forEach((element) => {
  sum = sum + element[4];
});
console.log(sum);
