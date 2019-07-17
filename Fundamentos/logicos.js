function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarPC = trabalho1 && trabalho2
    //const comprarPhone = !!(trabalho1 ^ trabalho2)
    const comprarPhone = trabalho1 != trabalho2
    const manterFelicidade = comprarSorvete

    return {comprarSorvete, comprarPC, comprarPhone, manterFelicidade}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))