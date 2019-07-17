const escola =[{
    nome: 'Turma M1',
    alunos:[{
        nome: 'Gustav',
        nota: 8.1
    },{
        nome: 'Any',
        nota: 9.3
    }]
}, {
    nome: 'Turma M2',
    alunos:[{
        nome: 'Twany',
        nota: 8.9
    },{
        nome: 'Robert',
        nota: 7.3
    }]
}]

const getNotaDoAluno = a => a.nota
const getNotaDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotaDaTurma)
console.log(notas1)

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotaDaTurma)
console.log(notas2)
