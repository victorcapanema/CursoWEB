const weight1 = 2.0
const weight2 = Number('5.0')

console.log(weight1, weight2)
console.log(Number.isInteger(weight1))
console.log(Number.isInteger(weight2))

const av1 = 9.486
const av2 = 4.68

const total= av1*weight1 + av2*weight2
const media = total / (weight1+weight2)

console.log(media.toFixed(2))
console.log(media.toString(2)) //binario
console.log(typeof media)