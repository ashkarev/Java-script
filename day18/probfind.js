let pattern='ABBCAD'
array=pattern.split('')
let output={

}
for(i=0;i<=array.length-1;i++){
    if(array[i] in output){
        console.log(array[i])
        break;
    }else{
        output[array[i]]=1

    }
}