require('dotenv/config')
const climaTempo = require('./helper/requestClimatempo')
const app = require('express')()
const startDatabase = require('./bd/index')

app.use('/', (req,res) =>{
    climaTempo()
    res.send('health')
})

app.listen(process.env.PORT || 3000, ()=>{
    startDatabase().then(x => console.log("Banco de Dados, Conectado"))
    console.log("Servidor online!")
})