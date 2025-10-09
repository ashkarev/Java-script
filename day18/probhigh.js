const weatherData=[
    {district :"thrissur",temp:32},
     {district :"thiru",temp:33},
      {district :"koz",temp:31},
       {district :"thrissur",temp:28},
        {district :"koz",temp:27},
         {district :"ern",temp:26},
          {district :"ern",temp:30},
           {district :"thiru",temp:29}
]

let output={}
weatherData.forEach((eachObj)=>{
    let currDist=eachObj.district
    let currtemp=eachObj.temp
    if(currDist in output){
        if(output[currtemp]>currtemp){
            output[currtemp]=currDist
        }

    }else{
        output[currDist]=currtemp
    }
})
console.log(output)