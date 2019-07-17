//Nao aceita repetição e nao é indexado
const times = new Set()
times.add('MIBR')
times.add('Astralis').add('Furia').add('Na\'Vi')
times.add('Liquid')
times.add('MIBR') //não adiciona repetido

console.log(times)
console.log(times.size)
console.log(times.has('MIBR'))
times.delete('Na\'Vi')
console.log(times.has('Na\'Vi'))
console.log(times)

const nomes = ['Rachel', 'Luck', 'July', 'Luck']
const nomesSet = new Set(nomes)
console.log(nomesSet)
