const almostArray = {0: 'Ralf', 1:'Any', 2: 'Bia'}
console.log(almostArray)

Object.defineProperty(almostArray, 'toString',{
    value: function(){return Object.values(this)},
    enumerable: false
})

console.log(almostArray[0])

const myArray = ['Ralf', 'Any', 'Bia']
console.log(almostArray.toString(), myArray)