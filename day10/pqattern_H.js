for(let row=1;row<=5;row++)
{
    let line=""
    for(col=1;col<=3;col++){

    
        if(col==1||col==3||row==3){
          line=line+' H'
        }else{
            line=line+'  '
        }
    }
    console.log(line)
    
}
//  H   H
//  H   H
//  H H H
//  H   H
//  H   H