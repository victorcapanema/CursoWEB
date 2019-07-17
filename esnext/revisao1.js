//let e const
{
    var a =2 //escopo global
    let b= 3 //escopo de bloco
    console.log(b)
}
console.log(a)

//Template String
const produto = 'PC'
console.log(`${produto} é nice`)

//Destructuring
const [l,e, ...tras] = "Coding"
console.log(l,e, tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const {idade: i, nome} ={nome: 'Any', idade: 15}
console.log(i, nome)