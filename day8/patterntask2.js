
// 5 10 15 20
// 10 20 30 40
// 15 30 45 60
// 20 40 60 80

let counter=1
for(row=1;row<=4;row++){
    let line=""
    for(col=1;col<=4;col++){
       
        line = line + (row * col * 5) + ' ';
              
      counter++
        
    
    }
   
    console.log(line)
}