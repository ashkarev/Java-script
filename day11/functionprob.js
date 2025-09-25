const prompt=require('prompt-sync')();
let a=prompt("enter the first valuue :")
let b=prompt("enter the first valuue :")
let c=prompt("enter the first valuue :")


function largest(num1,num2,num3){
    if(num1>num2&& num1>num3)
        console.log(num1,'is the largest')
    else if(num2>num3&& num2>num1)
        console.log(num2,'is the largest')
    else
        console.log(num3,'is the largest')
}
largest(a,b,c)