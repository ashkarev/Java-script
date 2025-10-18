class parent{
    //property
    name='parent'
    age=45
    houseNo=5
}
class child extends parent{
    name='child'
    age=9
}
class grandChild extends child{
    name='grand'
}
let obj=new grandChild()
console.log(obj.age,obj.name,obj.houseNo)