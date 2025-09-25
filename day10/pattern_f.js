for(let row=1;row<=5;row++){
    line=''
    for(let col=1;col<=5;col++){
        if(row==1||col==1||row==3){
            line=line+'F '
        }else{
            line=line+' '
        }
    }
    console.log(line)
}