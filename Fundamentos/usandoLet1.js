var numero = 1  //escopo global

{
    let numero = 2 // escopo local
    console.log('Inside = ', numero)
}

console.log('Outside = ', numero)