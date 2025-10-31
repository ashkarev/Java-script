let count=1
for(row=5;row>=1;row--){
    str=''
    for(col=1;col<=row;col++){
        str+=col+' '
        count++
    }
    console.log(str)
}