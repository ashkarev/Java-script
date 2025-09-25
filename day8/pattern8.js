// 1 2 3 4
// 5 6 7 8
// 9 10 11 12
// 13 14 15 16

// for(row=1;row<=4;row++){
//     let line=""
//     for(col=1;col<=1;col++){
//        for(i=1;i<=16;i++)
//            line=line+i +" " 
        
  
//     }
//     console.log(line)
// }


let counter=1;
for(row=1;row<=4;row++){
    let line=""
    for(col=1;col<=4;col++){
       
           line=line+counter +" " 
           counter++
        
  
    }
    console.log(line)
}