console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Charles', 'Anyte')
console.log(aprovados)

aprovados = ['Bia', 'Charles', 'Anyte']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3]= 'Poul'
aprovados.push('Aby')
console.log(aprovados.length)

aprovados[9] = 'Ralf'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])

aprovados = ['Bia', 'Charles', 'Anyte']
aprovados.splice(1, 2, 'John', 'Dave') //Exclui e adiciona elementos
console.log(aprovados)






