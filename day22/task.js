const projects = [
  {
    pid: 1,
    projectName: "E-Commerce Platform",
    manager: "Arun",
    status: "completed",
    team: [
      {
        empId: 101,
        empName: "Alice",
        role: "Developer",
        hours: 120,
        rating: 4.5,
      },
      { empId: 102, empName: "Bob", role: "Tester", hours: 80, rating: 4.2 },
      {
        empId: 103,
        empName: "Charlie",
        role: "Designer",
        hours: 60,
        rating: 4.8,
      },
    ],
    budget: 800000,
  },
  {
    pid: 2,
    projectName: "Banking App",
    manager: "Divya",
    status: "in-progress",
    team: [
      {
        empId: 104,
        empName: "Evan",
        role: "Developer",
        hours: 100,
        rating: 4.3,
      },
      {
        empId: 105,
        empName: "Fathima",
        role: "Tester",
        hours: 70,
        rating: 4.1,
      },
      { empId: 106, empName: "George", role: "DevOps", hours: 90, rating: 4.7 },
    ],
    budget: 1000000,
  },
  {
    pid: 3,
    projectName: "Health Tracker",
    manager: "Rahul",
    status: "completed",
    team: [
      {
        empId: 107,
        empName: "Hannah",
        role: "Developer",
        hours: 130,
        rating: 4.9,
      },
      {
        empId: 108,
        empName: "Ibrahim",
        role: "Tester",
        hours: 85,
        rating: 4.4,
      },
    ],
    budget: 600000,
  },
  {
    pid: 4,
    projectName: "EduPortal",
    manager: "Aisha",
    status: "in-progress",
    team: [
      {
        empId: 109,
        empName: "John",
        role: "Developer",
        hours: 90,
        rating: 4.2,
      },
      { empId: 110, empName: "Kiran", role: "Tester", hours: 75, rating: 3.9 },
      { empId: 111, empName: "Lina", role: "Designer", hours: 65, rating: 4.6 },
    ],
    budget: 700000,
  },
];
// 1️⃣ Print total number of projects.
console.log(projects.length);
console.log("-----------------------");

// 2️⃣ Print names of all 'completed' projects. (use filter + map)
// let nMeProject=''
// forMap=projects.map((eleement)=>
// forProject=eleement.filter((element)=>element.status=='completed')

// )
//     console.log(forProject)
let nameofempProj = "";
nameProject = projects.filter((Element) => Element.status == "completed");
newName = nameProject.map((element) => (nameofempProj = element.projectName));
console.log(nameofempProj);

console.log("--------------------------");
// 3️⃣ Print all managers' names in uppercase.
projects.forEach((element)=>{
    console.log(element.manager.toUpperCase())
})
console.log('-----------------------')

// 4️⃣ Print total budget of all projects. (use reduce)
totalBudget=projects.reduce((acc,curr)=>acc+curr.budget,0)
console.log(totalBudget)
console.log('------------------------')

// 5️⃣ Print all project names sorted by budget (descending order).

// projects.forEach((element)=>{
//     forSorting=element.toSorted((a,b)=>b.projectName-a.projectName)
//     console.log(forSorting)
// })
forSort=projects.toSorted((a,b)=>b.budget-a.budget)
forSort.forEach((element)=>{
    console.log(element.projectName)
})
console.log('---------------------')
// 6️⃣ Print total number of employees across all projects. (use map + flat + length)
 totalEmp=projects.map((element)=>element.team)
 flatEmp=totalEmp.flat(Infinity)
 console.log(flatEmp.length)
 console.log('-----------------------')



// 7️⃣ Print all unique roles (Developer, Tester, Designer, etc.) across projects. (use map + flat + new Set)
forRole=projects.map((eachRole)=>eachRole.team)
flatRole=forRole.flat(Infinity)
filterRole=flatRole.filter((element)=>element.role=='Designer' || element.role=='Tester' || element.role=='Developer')
console.log(filterRole)


// 8️⃣ Print names of employees whose rating > 4.5. (use map + flat + filter)
rating=flatRole.filter((element)=>element.rating>4.5)
rating.forEach((element)=>
    console.log(element.empName)
)
console.log('---------------')
// 9️⃣ Print total working hours of project pid = 2. (use find + reduce)
totalWorking=projects.find((element)=>element.pid==2)
console.log(totalWorking)
totalpd2=totalWorking.team.reduce((acc,curr)=>acc+curr.hours,0)
console.log(totalpd2)
console.log('-----------------------')

// 🔟 Print employee with highest rating overall. (use map + flat + reduce)
let emp=''

 highRate=projects.map((element)=>element.team)
 flatRate=highRate.flat(Infinity)
 totalRating=flatRate.reduce((acc,curr)=>acc.rating>curr.rating?acc:curr)
 console.log(totalRating.empName)
 console.log('-----------------')

// 11️⃣ Check if any project is still 'in-progress'. (use some)

checkProgress=projects.some((element)=>element.status=='in-progress')
console.log(checkProgress)
console.log('----------------------------')
// 12️⃣ Check if all projects have budget above 5 lakh. (use every)

above5=projects.every((element)=>element.budget>500000)
console.log(above5)
console.log('-----------------')

// 13️⃣ Print all employees who worked more than 100 hours. (use map + flat + filter)

filter100=flatRate.filter((element)=>element.hours>100)
filter100.forEach((elementname)=>{
    console.log(elementname.empName)
})
console.log('-------------')
// 14️⃣ Print total working hours of each project as an object: { projectName, totalHours }. (use map + reduce)

// 15️⃣ Print the project that has the highest total team hours. (nested reduce logic)

// 16️⃣ Create a new array of all employee names (flat list). (use map + flat + map)

// 17️⃣ Print average rating of all Developers across all projects. (use map + flat + filter + reduce)

// 18️⃣ Print all testers' names whose project status is 'completed'. (use filter + map + flat + filter)

// 19️⃣ Print all team members sorted by their rating (highest → lowest). (use map + flat + sort)

// 20️⃣ Print manager name with the project that has the largest team size. (use reduce)
