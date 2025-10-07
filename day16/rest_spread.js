const a=(...b)=>{
    let c=[1,2,3,4]
    let d=[...b,...c]
    console.log(d)
}
a(8,9,8,9)