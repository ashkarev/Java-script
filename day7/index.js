let input=7
let flag=true
for(let i=2;i<=input-1;i++){
    if(input%i==0){
     flag=false
}
}
if(flag==false){
    console.log('is not prime')
}else{
    console.log('is  prime')
}