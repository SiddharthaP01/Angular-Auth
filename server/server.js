const express = require('express')
const bodyParser = require('body-parser')

const app= express()

const api=require('./routes/api')
const PORT = 3000

app.use(bodyParser.json())
app.use('/api',api)


app.get('/',function(req,res){
    res.send('Hello from Server')
})


app.listen(PORT,function(){
    console.log('Server is at localhost:'+PORT)
})