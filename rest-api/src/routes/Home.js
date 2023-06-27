const express = require('express')

const app = express.Router()

app.get('/dash',(req,res)=>{
    res.send('dash')
  })

  module.exports = app