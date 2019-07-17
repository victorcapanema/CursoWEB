const moduloA = require('../../moduloA') //(C:\Users\UNIVERSO\Desktop\Music\CursoJS\Node\moduloA.js)
console.log(moduloA.hi)

const http = require('http')
http.createServer((req, res) => {
    res.write('Hellooooo!')
    res.end()
}).listen(8080)








