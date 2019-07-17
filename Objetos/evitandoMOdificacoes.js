//Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Mouse',
    preco: 200,
    tag: 'Eletronic'
})
console.log('Extensive:', Object.isExtensible(produto))

produto.nome = 'Eraser'
produto.descricao == 'White Eraser'
delete produto.tag
console.log(produto)

//Object.seal
const pessoa = {nome: 'Julyane', idade: 35}
Object.seal(pessoa)
console.log('Selado:' , Object.isSealed(pessoa))

pessoa.sobrenome = 'Save'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)