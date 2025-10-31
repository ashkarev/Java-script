let num=153
let temp=num
let sum=0
while(temp>0){
    digit=temp%10
    sum=sum+digit**3
    temp=Math.floor(temp/10)
}
if(sum==num){
    console.log('ys')
}else{
    console.log('no')
}