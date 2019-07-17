const pessoa ={
    nome: 'Any',
    idade: '19',
    endereco:{
        logradouro: 'Rua Cuty Eyes',
        numero: 354
    }
}

const {nome, idade} = pessoa

console.log(nome, idade)

console.log(pessoa)

const {nome: n, idade: i} = pessoa
console.log(n, i)

const {sobrenome, peso = true} = pessoa
console.log(sobrenome, peso)