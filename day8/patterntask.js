// 100 99 98 97
// 100 99 98 97
// 100 99 98 97
// 100 99 98 97

for(row=1;row<=4;row++){
    let line=""
    for(col=100;col>=97;col--){
        line=line+col+' '
    }
    console.log(line)
}