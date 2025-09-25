let num=123456789
let searchKey=100
let flag=false
while(num>0){
    let lastDigit=num%10;
       num=(Math.floor(num/10));
    if(lastDigit==searchKey)
   {
    flag=true
   }

}
if(flag==true){
    console.log(searchKey,'is found ')
}else{
    console.log(searchKey,'not found')
}
   
