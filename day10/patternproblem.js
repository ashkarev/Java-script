for(let row=4;row>=1;row--){
    line=""
    for(let col=1;col<=row;col++){
        line=line+" *"
    }
    for(let hash=4;hash>=row;hash--){
        line=line+" # "
    }
    console.log(line)
}