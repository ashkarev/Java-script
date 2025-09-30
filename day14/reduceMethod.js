let aray=[1,2,3,4,5]
newArray=aray.reduce((acc,curr)=>acc+curr,4)
console.log(newArray)
let largest=aray.reduce((acc,curr)=>acc>curr?acc:curr)

console.log(largest)