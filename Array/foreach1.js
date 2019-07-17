const gems = ['Emerald','Saphire','Ruby','Pearl']

gems.forEach(function(nome, indice){
    console.log(`${indice+1}) ${nome}`)
})

gems.forEach(nome => console.log(nome))

const showGems = gems => console.log(gems)
gems.forEach(showGems)