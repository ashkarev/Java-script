function add(...args){
    let sum=0
    args.forEach((element)=>sum=sum+element)
    console.log(sum)
}
add(2,3,4,5)