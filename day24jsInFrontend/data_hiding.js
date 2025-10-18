class accDetails{
    name="ashkar"
    accNo=10
    #balance=10
    //hiding0
printBalance(){
    console.log(this.#balance )
}
}

let obj=new accDetails()
console.log(obj.balance)
obj.printBalance()