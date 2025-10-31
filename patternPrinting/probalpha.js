for(row=1;row<=5;row++){
    let str=''
    for(col=1;col<=5;col++){
        if(col==1||col==5||row==3){
            str+='H'
        }else{
            str+=' '
        }
    }
    console.log(str)
}