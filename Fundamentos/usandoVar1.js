{
    {
        {
            {
                var sera = 'Maybe??' //escopo global
            }
        }
    }
}
console.log(sera)

function teste(){
    var local=546   //escopo local dentro de functions
}

teste()
console.log(local)