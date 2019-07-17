const alunos = [
    {nome: 'John', nota: 7.3, bolsista: false},
    {nome: 'Mary', nota: 9.2, bolsista: true},
    {nome: 'Peter', nota: 9.8, bolsista: false},
    {nome: 'Any', nota: 8.7, bolsista: true}
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(resultado)