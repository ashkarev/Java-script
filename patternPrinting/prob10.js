let count=1
for(row=5;row>=1;row--){
    str=''
    for(space=1;space<=5-row;space++){
        str+=' '
    }
    for(col=1;col<=row;col++){
        str+=col+' '
       
    }
    console.log(str)
}