Array.prototype.forEach2 = function(callback){
    for(let i =0; i< this.length; i++){
        callback(this[i], i, this)
    }
}

const gems = ['Emerald','Saphire','Ruby','Pearl']

gems.forEach2(function(nome, indice){
    console.log(`${indice+1}) ${nome}`)
})