function Aula(nome , videoID){
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Welcome', 753)
const aula2 = new Aula('See you soon', 951)
console.log(aula1, aula2)

//Simulando o new
function novo(f,...params){
    const obj ={}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'Welcome', 852)
const aula4 = novo(Aula, 'See you soon', 357)
console.log(aula3, aula4)



