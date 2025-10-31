const prompt=require('prompt-sync')()

let numb=prompt('enter tge name')
rev=numb.toString().split('').reverse().join('')
if(numb.toString()==rev){
    console.log('pal')
}else{
    console.log('no')
}