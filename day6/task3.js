let input=5;
let output=''
// console.log(output+input+(input*2)+(input*input))
let i=1;
while(i<=input){
    if(i==1){
        output=output+input*i
    }
     if(i==2){
        output=output+input*i
    }
     if(i==input){
        output=output+input*input
    }
    i++
}console.log(output)