const pessoa = {
    saudacao: 'Hello',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() //consflito entre paradgmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()