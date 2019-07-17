function tratarErro(error){
    //throw new Error('Error: ')
    //throw 5
    //throw true
    //throw 'mensagem'
    throw {
        nome: error.name,
        msg: error.message,
        date: new Date
    }
}


function imprimirNomeUpper(obj){
    try{
        console.log(obj.nome.toUpperCase() + '!!!')
    } catch (e){
        tratarError(e)
    } finally{
        console.log('Final')
    }
}

const obj = { nome: 'Rina'}
imprimirNomeUpper(obj)