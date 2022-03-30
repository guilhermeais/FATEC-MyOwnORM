const express = require('express')
const cors = require('cors')
const app  = express()
const routes = require('./routes')
const path = require('path')

app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')

app.use('/public', express.static(path.join(__dirname, '/views/assets')))

app.use(express.json())
app.use(cors())

app.use(routes)

module.exports = app