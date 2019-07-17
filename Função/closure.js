//Closure é o escopo criado quando declarada uma função
//Esse escopo permite a função acessar e maniupular variaveis externas a função

const x = 'Global'

function fora(){
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())