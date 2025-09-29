let array=[1,2,3,44,5,7,8,9,10]
let evenArray=[]
for(i=0;i<=array.length-1;i++){
    if(array[i]%2==0){
        evenArray.push(array[i])
    }
}
console.log(evenArray)