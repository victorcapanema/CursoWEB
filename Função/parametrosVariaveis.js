function soma() {
    let soma =0
    for(i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(50.2,80.6,99.9))

console.log(soma(50.2,80.6,99.9,'a','b','c'))
console.log(soma('a','b','c'))