//função sem retorno
function imprimirSoma(a, b){
    console.log(a+b)
}

imprimirSoma(7,6)

function soma(a, b =0){
    return a + b
}

console.log(soma(4,8))
console.log(soma(9))