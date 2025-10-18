function add(...args){
    let addition=args.reduceRight((a,b)=>a-b)
    console.log(addition)
}
add(1,2)

add(1,2,3)