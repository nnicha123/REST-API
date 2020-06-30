const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
// Set up express app
const app = express()

// connect to mongoDB
mongoose.connect("mongodb://localhost/ninjago",{ useUnifiedTopology: true, 
useNewUrlParser: true })
// mongoose.Promise = global.Promise

app.use(express.static('public'))

app.use(bodyParser.json())
// initialize routes
app.use('/api', require('./routes/api'))
// Error handling middleware
app.use(function(err,req,res,next){
    // console.log(err)
    res.status(422).send({error:err.message})
})

// Listen for requests
app.listen(process.env.port || 4000, () =>{
    console.log('Ready to accept requests')
})