const students=[
    {rollNo:1,name:'Akhil',course:'MERN',mark:82,attendance:92},
    { rollNo:2,name:'Riya',course:'PY',mark:76,attendance:85},
    {rollNo:3,name:'Rahul',course:'MERN',mark:45,attendance:70},
    {rollNo:4,name:'Sneha',course:'DATA',mark:90,attendance:95},
    {rollNo:5,name:'Vishnu',course:'PY',mark:55,attendance:60}
]

// print all names in upper
students.forEach((Element)=>
console.log(Element.name.toUpperCase())
)
// attendance below 80
let Attn=students.filter((Element)=>
Element.attendance>80
)
console.log(Attn)
// mern and 75 above mark

let mAbove=students.filter((element)=>
element.course=='MERN' && element.mark>75
)
console.log(mAbove)

// Calculate total mark
let total=students.reduce((acc,curr)=>acc+curr.mark,0)
console.log(total)

// fo=ind highest mark

let high=students.reduce((acc,curr)=>acc.mark>curr.mark?acc:curr)
console.log(high)
// check nay pne faild 

let fail=students.filter((element)=>element.mark<50)
console.log(fail)
// print avg mark

let avg=students.reduce((acc,curr)=>acc+curr.mark/students.length,0)
console.log(avg)

// names with map
let names=students.map((element)=>console.log(element.name))