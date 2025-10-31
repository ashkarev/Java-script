for(row=1;row<=4;row++){
    let str=' '
    let counter=row
    for(col=1;col<=4;col++){
        str+=counter+' '
        counter=counter*counter
        counter++
    }
    console.log(str)
}