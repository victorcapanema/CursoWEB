const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 17 * * 0', function () {
    console.log('Executando Tarefa 1"', new Date().getSeconds())
})

setTimeout(() => {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!')
}, 20000);

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(0,4)]
regra.hour = 17
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Cancelando Tarefa 2!', new Date().getSeconds())
})