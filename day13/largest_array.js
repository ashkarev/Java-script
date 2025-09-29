let array=[23,46,89,100]
let largest=array[0]
for(i=0;i<=array.length-1;i++){
    if(array[i]>largest)
    {
       largest=array[i]
    }
}
console.log(largest)