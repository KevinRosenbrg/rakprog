const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const app = express()
const PORT = 8080
const catsRoutes = require('./routes/cats.routes')
const dogRoutes = require('./routes/dogs.routes')
const todoRoutes = require('./routes/todo.routes')
require('dotenv').config()

app.use(morgan('dev'))
app.use(express.json()) // body-parser asemel

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.xaydx0j.mongodb.net/?retryWrites=true&w=majority`
mongoose
  .connect(uri)
  .then(() => console.log('Database connection established'))
  .catch((e) => console.error(e))

app.use('/cats', catsRoutes)
app.use('/dogs', dogRoutes)
app.use('/todo', todoRoutes)

// CRUD
app.get('/', (req, res) => {
  res.send('Hello Land of Ooo!')
})

app.post('/', (req, res) => {
    res.send('Hello Land of Poo!')
})

app.get('/flights/:from-:to', (req, res) => {
    res.send({
        params: req.params,
        body: req.body,
    })
})

app.get('*', (req, res) => {
    res.send('404')
})

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`)
  })
