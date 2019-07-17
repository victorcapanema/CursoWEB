const alunos = [
    {nome: 'John', nota: 7.3, bolsista: false},
    {nome: 'Mary', nota: 9.2, bolsista: true},
    {nome: 'Peter', nota: 9.8, bolsista: false},
    {nome: 'Any', nota: 8.7, bolsista: true}
]

const bolsistas = x => x.bolsista


const todosBolsistas = alunos.map(bolsistas).reduce((x,y)=> x && y)
console.log(todosBolsistas)

const algumBolsista = alunos.map(bolsistas).reduce((x,y)=> x || y)
console.log(algumBolsista)
