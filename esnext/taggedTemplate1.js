//Tagged templates
function tag(partes, ...valores){
    console.log(partes)
    console.log(valores)
    return 'Other thing'
}

const aluno = 'Gustav'
const situacao = 'Approved'
console.log(tag `${aluno} is ${situacao}`)