const express = require('express')
const app = express();
const port =  5000;
const data = require('./data.json')
var cors = require('cors');
app.use(cors())

app.get('/', (req, res) =>{
    res.send('Hello from node server')
})

app.get('/courses', (req, res) =>{
    res.send(data)
})

app.get('/courses/:id', (req, res) =>{
    const id = req.params.id
    const courseId = data.find(courseId => courseId.id = id ) 
    res.send(courseId)
})

app.listen(port, ()=>{
    console.log('server running')
})