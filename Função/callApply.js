function getPrice(tax = 0, currency = 'R$'){
    return `${currency} ${this.price * (1 - this.desc) * (1 + tax)}`
}

const product = {
    name: 'PC',
    price: 4579.98,
    desc: 0.25,
    getPrice
}

console.log(getPrice())
console.log(product.getPrice())

const car = {price: 13575, desc: 0.15}

console.log(getPrice.call(car))
console.log(getPrice.apply(car))

console.log(getPrice.call(car, 0.24, '$'))
console.log(getPrice.apply(car, [0.24, '$']))
