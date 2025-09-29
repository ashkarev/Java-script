const add=(a)=>{
    console.log('hey')
    return (b)=>{
    console.log('hell')

        return(c)=>{
    console.log('hellop')

            console.log(a+b+c)
        }
    }
}

add(2)(3)(4)
