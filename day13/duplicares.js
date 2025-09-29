let array=[10,20,5,30,44,5,79,10,20,44]

for(i=0;i<array.length-1;i++){
   for(j=i+1;j<array.length;j++){
    if( array[i]==array[j]){
         console.log(array[i])
    }
    
   }
}

