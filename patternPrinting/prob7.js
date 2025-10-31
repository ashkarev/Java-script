let count=1
for(row=1;row<=5;row++){
    str=''

    for(space=1;space<=5-row;space++){
         str+='  '
    }
    for(col=1;col<=row;col++){
        str+=count+' '
        count++
    }
    console.log(str)
}