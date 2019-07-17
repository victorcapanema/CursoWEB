const pessoa ={
    nome: 'Rabrin',
    idade: 29,
    peso: 75
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
});

Object.defineProperty(pessoa, 'dataNascimento',{
    enumerable: true,
    writable: false,
    value: '05/12/1990'
})

pessoa.dataNascimento = '01/01/1901'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.assign ES 2015
const dest = {a: 1}
const o1 ={b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)

console.log(obj)
