console.log(Math.ceil(7,2))

const obj1={}
obj1.nome='Wind'
//obj1['nome'] = 'Wind2'
console.log(obj1.nome)

function Obj(nome){
    this.nome = nome
}

const obj2 = new Obj('Air')
const obj3 = new Obj('Fire')


console.log(obj2.nome)
console.log(obj3.nome)