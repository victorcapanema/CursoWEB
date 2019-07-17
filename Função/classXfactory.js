class Pessoa {

    constructor(nome){
        this.nome = nome
    }

    say(){
        console.log(`My name is ${this.nome}`)
    }
}

const p1 = new Pessoa('Mary')
p1.say()

const pessoa = nome => {
    return {
        say: ()=> console.log(`My name is ${nome}`)
    }
}

const p2 = new Pessoa('Any')
p2.say()