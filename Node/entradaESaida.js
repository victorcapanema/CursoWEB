const anonimo = process.argv.indexOf('-a') != -1
//console.log(anonimo)

if(anonimo){
    process.stdout.write('Say man!\n')
    process.exit()
}
else{
    process.stdout.write('Informe seu nome: ')
    process.stdin.on('data', data => {
        const nome = data.toString()
        process.stdout.write(`Say ${nome}`)
        process.exit()
    })
}