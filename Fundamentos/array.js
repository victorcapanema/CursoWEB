const array =[8.5, 9.2, 7, 6.3, 4]
console.log(array[0] , array[4])
console.log(array[5])

console.log(array.length)

array.push({id: 6}, false, null,'Exemple')
console.log(array)

console.log(array.pop())
delete array[0]
console.log(array)

console.log(typeof array)