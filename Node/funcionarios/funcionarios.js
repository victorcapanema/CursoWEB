const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = fun => fun.pais == 'China' && fun.genero == 'F'

const menorSalario = (fun1, fun2) =>{
    return fun1.salario < fun2.salario ? fun1 : fun2
}

axios.get(url).then(response =>{
    const funcionarios = response.data

    //Mulher chinesa com menor salario
    const result = funcionarios.filter(chineses).reduce(menorSalario)

    console.log(result)
})


//const chineses = function(fun){
//    if(fun.pais =='China' && fun.genero == 'F'){
//        return {fun}
//    }
//}

//const menorSalario =function(fun1,fun2){
//       if(fun1.salario < fun2.salario){
//            return fun1
//        }
//        else{
//            return fun2
//        }
//}