const products = [
    { pid: 100, pName: 'Apple', brand: '5G', price: 120000, display: 'OLED' },
    { pid: 101, pName: 'Samsung', brand: '4G', price: 90000, display: 'AMOLED' },
    { pid: 102, pName: 'OnePlus', brand: '4G', price: 75000, display: 'Fluid AMOLED' },
    { pid: 103, pName: 'Pixel', brand: '3G', price: 85000, display: 'OLED' },
    { pid: 104, pName: 'Xiaomi', brand: '3G', price: 40000, display: 'Super AMOLED' }
];

// print product name only -

products.forEach((each)=>{
    console.log(each.pName)
})


// print all mobile details whose display is oled :
let oledArray=products.filter((element)=>
    element.display=='OLED'
)
console.log(oledArray)


 
// console.log(-------------------------------)
// print 3g mobile phone names :
let threeG=products.filter((element)=>
    element.brand=='3G'
)
console.log(threeG)

//   console.log(-------------------------------)
// sort mobile based on price - sort 
let sotedArray=products.toSorted((a,b)=>b.price-a.price)
console.log(sotedArray)



// console.log(-------------------------------)
// print costly mobile price 
let cos=products.reduce((acc,curr)=>acc.price>curr.price?acc:curr)
console.log(cos)


// print low cost mobile
let low=products.reduce((acc,curr)=>acc['price']<curr['price']?acc:curr)
console.log(low)



// let output={}
// products.forEach((element)=>{
//     let priceName=element.price
//     let productName=element.pName
//     if(productName in output){
//         if(output[priceName]<priceName){
//             output[productName]=priceName
//         }
//     }else{
//         output[productName]=priceName
//     }

// })

// console.log(output)