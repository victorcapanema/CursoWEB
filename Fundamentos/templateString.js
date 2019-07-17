const nome = 'John'
const concatenacao = 'Hi ' + nome + '!'

const template = `
                Hi
                ${nome}!`

console.log(concatenacao, template)

console.log(`1 + 1 = ${1 + 1}`)

const up = s => s.toUpperCase()

console.log(`Hi, ${up('universe')}!`)