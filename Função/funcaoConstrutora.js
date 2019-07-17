function Car(maxSpeed = 200, delta =5){
    let velocidadeAtual = 0

    this.acelerar = function(){
        if(velocidadeAtual + delta <= maxSpeed){
            velocidadeAtual += delta
        }
        else{
            velocidadeAtual = maxSpeed
        }
    }

    this.getVelocidadeAtual = function (){
        return velocidadeAtual
    }


}

const uno = new Car
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Car(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Car)
console.log(typeof ferrari)
