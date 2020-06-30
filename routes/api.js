const express = require('express')
const router = express.Router()

// Get a list of ninjas from the database
router.get('/ninjas',(req,res) => {
    res.send({type:'GET'})
})
// Add a new ninja to the database
router.post('/ninjas',(req,res) => {
    console.log(req.body)
    res.send({
        type:'POST',
        name:req.body.name,
        rank:req.body.rank
    })
})
// update ninja in the database
router.put('/ninjas/:id',(req,res) => {
    res.send({type:'PUT'})
})
// delete ninja from database
router.delete('/ninjas/:id',(req,res) => {
    res.send({type:'DELETE'})
})

module.exports = router