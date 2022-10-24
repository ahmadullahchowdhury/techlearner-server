const express = require('express')
const app = express();
const port =  5000;
const exercise = require('./data.json')
var cors = require('cors');
app.use(cors())

app.get('/', (req, res) =>{
    res.send('Hello from node server')
})

app.get('/exercise', (req, res) =>{
    res.send(exercise)
})

app.get('/exercise/:id', (req, res) =>{
    const id = req.params.id
    const exerciseId = exercise.find(exerciseId => exerciseId.id = id ) 
    res.send(exerciseId)
})

app.listen(port, ()=>{
    console.log('server running')
})