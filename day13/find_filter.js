let array=[3,8,6,5];
let even=array.find((eachElement)=>eachElement%2==0)
console.log(even);

let newArray=array.filter((eachElement)=>eachElement%2==0)
console.log(newArray);
console.log(array)