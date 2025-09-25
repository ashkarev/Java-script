for(let row=1;row<=4;row++){
    line=""
    for(col=1;col<=4;col++){
        if(col%2==0){
            line=line+"# "
        }else{
            line=line+"* "
        }
    }console.log(line)
}
//* # * #
//* # * #
//* # * #
//* # * #