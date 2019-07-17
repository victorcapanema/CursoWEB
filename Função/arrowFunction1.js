let dobro = function(a){
    return 2 * a
}

dobro = (a)=>{
    return 2 * a
}

dobro = a => a * 2 //return implicito

console.log(dobro(5))

let ola = function(){
    return 'Hi'
}

ola = () => 'Hi'
ola = _ => 'Hi' //possui um parametro
console.log(ola())

