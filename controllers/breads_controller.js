const express = require('express')
const breads = express.Router()
const bread = require('../models/bread.js')

// SHOW
breads.get('/:arrayIndex', (req, res) => {
    res.send(bread[req.params.arrayIndex])
  })
  

module.exports = breads