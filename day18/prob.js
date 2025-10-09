let str="hello hai hello world Hello"

array=str.split(" ")

let output={

}
array.forEach((word)=>{
    if(word in output ){
        output[word]=output[word]+1
    }else{
        output[word]=1
    }
})
console.log(output)