let array=[12,3,55,7,9,0]
let smallest=array[0];
for(i=0;i<=array.length-1;i++){
    if(array[i]<smallest){
        smallest=array[i]
    }
}
console.log(smallest)