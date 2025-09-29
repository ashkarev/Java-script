let globalData='this is global'
const paretnfn=()=>{
    let parentData='this is parent'
    return ()=>{
        let childData='this is child'
        console.log(globalData)
        console.log(parentData)
        console.log(childData)
    }
}

childfn=paretnfn()
childfn()