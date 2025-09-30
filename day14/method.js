const students = [
  [1, "Anu", "BCA", 85, "Kochi"],
  [2, "Basil", "BCom", 78, "Kollam"],
  [3, "Chitra", "BCA", 92, "Kochi"],
  [4, "Dinesh", "BSc", 67, "Trivandrum"],
  [5, "Eva", "BCom", 88, "Kottayam"],
  [6, "Farhan", "BSc", 59, "Kochi"],
  [7, "George", "BCA", 73, "Trivandrum"],
  [8, "Haritha", "BCom", 81, "Kollam"],
  [9, "Irfan", "BSc", 90, "Kochi"],
  [10, "Jiya", "BCA", 95, "Kottayam"],
];

// Print students who scored above 80
 newArray=students.filter((Element)=>Element[3]>80)
console.log(newArray)

// Print all students in BCA course
 newArray=students.filter((Element)=>Element[2]=="BCA")
console.log(newArray)
// Print all students from Kochi
newArray=students.filter((element)=>element[4]=="Kochi")
console.log(newArray);
// Create a new array with only names and marks
newArray=students.map((element)=>[element[1], element[3]])

console.log(newArray);
// Print total marks of all students
let sum=0
students.forEach((element)=>
    sum=sum+element[3]
)
console.log(sum);


// Print average mark of students
let avg=0
students.forEach((element)=>{
    avg=avg+element[3]/students.length
})
console.log(avg);

//  Sort students by marks in descending order
newArray=students.sort((a,b)=>b[3]-a[3])

console.log(newArray);

// Find the highest scoring student
console.log(newArray[0])
//  Print students who scored less than 70
newArry=students.filter((element)=>element[3]<70)
console.log(newArry)