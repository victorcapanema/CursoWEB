const alunos = [
    {nome: 'John', nota: 7.9},
    {nome: 'Mary', nota: 9.2}
]

//Imperativo
let total1 = 0
for(let i=0; i< alunos.length;i++){
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

//Declarativo
const getNOta = aluno => aluno.nota
const soma = (total, atual)=> total + atual
const total2 = alunos.map(getNOta).reduce(soma)
console.log(total2 / alunos.length)



