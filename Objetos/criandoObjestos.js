//Usando a notação literal
const obj1= {}
console.log(obj1)

//Object em js
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//Funções construtoras
function Produto(nome, preco, desc){
    this.nome = nome

    this.getPrecoComDesconto = () =>{
        return preco * (1 - desc)
    }
}

const p1 = new Produto('TV', 500, 0.15)
const p2 = new Produto('PC', 5578, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//Função Factory
function criarFuncionario(nome, salarioBase, faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('John', 1200,7)
const f2 = criarFuncionario('Mary', 3500,5)
console.log(f1.getSalario(), f2.getSalario())

//Object.create
const filha = Object.create(null)
filha.nome = "Any"
console.log(filha)

//Uma função json
const fromJSON =JSON.parse(`{"info": "JSON here"}`)
console.log(fromJSON.info)