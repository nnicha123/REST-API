const express = require('express')
// Set up express app
const app = express()
// initialize routes
app.use('/api', require('./routes/api'))
// Listen for requests
app.listen(process.env.port || 4000, () =>{
    console.log('Ready to accept requests')
})