let car ={
    name:"polo",
    model:"petrol",
    manufactorer:"Volswagon",
    price:800000
}

// 1. display carname and price
// 2. Check model key is present, if present display its value
// 3. Add varient as Automatic and manual
// 4. Add color as red
console.log(car.name)
console.log(car['price'])
if('model' in car){
console.log(car.model)

}

car.varient=['automatic','manual']
console.log(car)
car.color='red'
console.log(car)


