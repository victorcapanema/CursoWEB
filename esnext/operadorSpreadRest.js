// Spread com objetos
const funcionario = {nome: 'Mary', salario: 15876.69}
const clone = {ativo: true, ...funcionario}
console.log(clone)

//Usar spread com array
const grupoA = ['John', 'Peter', 'Glory']
const grupoFinal = ['Mary', ...grupoA, 'Raphtalia']
console.log(grupoFinal)

