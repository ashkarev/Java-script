for(row=1;row<=5;row++){
    str=''
    for(col=1;col<=5;col++){
        if(col==1||row==1||row==3){
            str+='F'
        }else{
            str+=' '
        }
         
    }
    console.log(str)
}