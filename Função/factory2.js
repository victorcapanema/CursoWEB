//Factory simples

function criarProduto(nome, valor){
    return{
        nome, //=nome: nome,
        valor, //=valor: valor
        desconto: 0.1
    }
}

console.log(criarProduto('TV', 999.98))
console.log(criarProduto('PC', 3785.99))