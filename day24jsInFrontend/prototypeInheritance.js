let parent={
    name:'parent',
    age:45,
    houuseNo:345
}
let child={
    name:"child",
    age:2
}
let grand={
    name:'grand'
}
//prototype inheritance            0
child.__proto__=parent
grand.__proto__=child
console.log(grand.age,grand.houuseNo)