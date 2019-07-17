const pessoa = {nome: 'John'}
pessoa.nome = 'Peter'
console.log(pessoa)

// pessoa = {nome : 'Any'}  error

Object.freeze(pessoa)

pessoa.nome = 'Mary'
pessoa.endereco = 'Rua Nice'
delete pessoa.nome

console.log(pessoa)


