const express = require('express')

require('dotenv').config()
const PORT = process.env.PORT
const app = express()
// MIDDLEWARE
app.get('/', (req, res) => {
    res.send('welcome to an awesome app about breads!')
})

const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

app.listen(PORT, () => {
    console.log('nomming at port', PORT)
})

app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

