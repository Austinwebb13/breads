const express = require('express')
const breads = express.Router()
const bread = require('../models/bread.js')

// SHOW
breads.get('/:arrayIndex', (req, res) => {
  if (bread[req.params.arrayIndex]) {
    res.render('Show', {
      bread:bread[req.params.arrayIndex]
    })
  } else {
    res.render('404')
  }
})


  

module.exports = breads