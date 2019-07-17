const numbers = [1, 2, 3, 4, 5]

//For com proposito
let result = numbers.map(x => x + x) //numbers.map(function(x){return x +x})

console.log(result)

const soma10 = x => x + 10
const triplo = x => x * 3
const toMoey = x => `R$ ${parseFloat(x).toFixed(2).replace('.',',')}`

result = numbers.map(soma10).map(triplo).map(toMoey)
console.log(result)