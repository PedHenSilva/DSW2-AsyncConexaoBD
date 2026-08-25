import express from 'express'
import bodyParser from 'body-parser'
import CarroDB from "./database/conexaoCallback.js";
import cors from 'cors'

let app = express()

app.use(cors())


app.use(bodyParser.urlencoded({ extends: false}))
app.use(bodyParser.json())

app.get('/', function (req, res) {
    res.send("API dos Carros")
})

//GET em /carros
app.get('/carros', function(req, res) {
    res.send("Lista de todos os carros aqui")
})

//GET em /carros
app.get('/carros/:id', function (req, res) {
    let ids = req.params.id
    CarroDB.getCarrosById(ids, function (carro) {
      //  console.log(carro.id + ":" + carro.nome)
        res.json(carro)
    })
})

//POST em /carros
app.post('/carros', function (req, res) {
    let carros = req.body
    CarroDB.save(carros, function (carro) {
      //  console.log(carro.id + ":" + carro.nome)
        res.json(carro)
    })
})

//POST em /carros
app.put('/carros', function (req, res) {
    let carros = req.body
    CarroDB.update(carros, function (carro) {
      //  console.log(carro.id + ":" + carro.nome)
        res.json(carro)
    })
})

//POST em /carros
app.delete('/carros/:id', function (req, res) {
    let ids = req.params.id
    CarroDB.delete(ids, function (carro) {
      //  console.log(carro.id + ":" + carro.nome)
        res.json(carro)
    })
})

//Inicia o servidor
let server = app.listen(3000, function (){
    let host = server.address().address
    let port = server.address().port
    console.log("Server iniciar em http://%s:%s", host, port)
})
