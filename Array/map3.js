Array.prototype.map2 = function(callback){
    const newArray = []
    for(let i =0;i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}


const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}',
]

const toObject = json => JSON.parse(json)
const onlyPrice = produto => produto.preco

const result = carrinho.map2(toObject).map2(onlyPrice)

console.log(result)
