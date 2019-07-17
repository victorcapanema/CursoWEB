const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}',
]

const toObject = json => JSON.parse(json)
const onlyPrice = produto => produto.preco

const result = carrinho.map(toObject).map(onlyPrice)

console.log(result)

