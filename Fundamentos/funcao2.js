//Armazenando função em uma variavel
const imprimirSoma = function (a, b){
    console.log(a +  b)
}

imprimirSoma(9,5)

//Armazenando função arrow em uma variavel
const soma=(a,b)=>{
    return a + b
}

console.log(soma(6,7))

//retorno implicito
const subtracao = (a,b) => a-b

console.log(subtracao(4,6))