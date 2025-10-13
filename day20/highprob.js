const employees = [
  {
    empId: 101,
    empName: "Alice",
    designation: "Developer",
    salary: 50000,
    worklog: [
      { project: "E-Commerce", hours: 8, task: "Frontend", mode: "remote" },
      { project: "BankApp", hours: 6, task: "API Integration", mode: "office" },
      { project: "Portfolio", hours: 4, task: "Bug Fixing", mode: "remote" },
    ],
  },
  {
    empId: 102,
    empName: "Bob",
    designation: "Tester",
    salary: 40000,
    worklog: [
      { project: "E-Commerce", hours: 5, task: "Testing", mode: "office" },
      { project: "HealthApp", hours: 7, task: "Automation", mode: "remote" },
    ],
  },
  {
    empId: 103,
    empName: "Charlie",
    designation: "Manager",
    salary: 70000,
    worklog: [
      { project: "BankApp", hours: 9, task: "Review", mode: "office" },
      { project: "E-Commerce", hours: 6, task: "Client Meeting", mode: "office" },
    ],
  },
  {
    empId: 104,
    empName: "Diana",
    designation: "Developer",
    salary: 55000,
    worklog: [
      { project: "Portfolio", hours: 7, task: "UI Design", mode: "remote" },
      { project: "HealthApp", hours: 5, task: "Backend", mode: "office" },
    ],
  },
  {
    empId: 105,
    empName: "Evan",
    designation: "Support",
    salary: 35000,
    worklog: [
      { project: "BankApp", hours: 4, task: "Customer Support", mode: "remote" },
      { project: "E-Commerce", hours: 6, task: "Live Chat", mode: "office" },
    ],
  },
];



// 1. Print total number of employees
console.log(employees.length)

// 2. Print names of all Developers

employees.forEach((element)=>
console.log(element.empName)
)
console.log('--------------------------------------------');

// 3. Print salary of employee with empId 103
let EmployeeFind1003=employees.find((element)=>element.empId==103)
console.log(EmployeeFind1003)

// 4. Print all worklogs done in 'remote' mode
let remotemode=employees.map((element)=>element.worklog)
let flatremote=remotemode.flat((Infinity))
let filterRemote=flatremote.filter((element)=>element.mode=="remote")
console.log(filterRemote)

console.log('--------------------------------------------');

// 5. Print all worklogs where hours > 6
let workHr6=flatremote.filter((element)=>element.hours>6)
console.log(workHr6)

console.log('--------------------------------------------');

// 6. Print all worklogs done on project 'E-Commerce'
// let Ecommmap=employees.map((element)=>element.designation)
// let Ecommmapflat=Ecommmap.flat(Infinity)
// let EcomFilter=Ecommmapflat.filter((element)=>element.project=='E-Commerce')
// console.log(EcomFilter)
let Ecomm=flatremote.filter((element)=>element.project=='E-Commerce')
console.log(Ecomm)
console.log('--------------------------------------------');

// 7. Print all tasks done by employee with empId 104
let empoyeefind104=employees.find((element)=>element.empId==104)
let employee104=empoyeefind104.worklog

console.log(employee104)



console.log('----fff--------------------------------------------');

// 8. Print total working hours of employee with empId 104
let storeWork=employee104.reduce((acc,curr)=>acc+curr.hours,0)
console.log(storeWork)


console.log('--------------------------------------------');

// 9. Print employee who worked the most total hours (sum of worklog hours)

  let maxHours=0
  let empname=''
  employees.forEach((element)=>{
    let totalHrs=element.worklog.reduce((acc,curr)=>acc+curr.hours,0)
    if(totalHrs>maxHours){
       maxHours=totalHrs
       empname=element.empName
       let emp=element
          console.log(emp)
    }
    
    
  })
// console.log(maxHours,empname)
console.log('--------------------------------------------');

// 10. Print employee with the highest salary