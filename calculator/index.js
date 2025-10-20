const displayData=(value)=>{
    result.value+=value
}
const clearValue=()=>{
    result.value=  ""
}
const calculate=()=>{
    try {
        if(result.value==''){
            result.value='Enter a valid Expression'
            // result.value=alert('wrong')
        }else{
    result.value=eval(result.value)

        }
    } catch (error) {
        result.value="Invalid Output"
    }
}

const LastDigit=()=>{
  result.value= result.value.slice(0,-1)
}