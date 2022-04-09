const {Router} = require('express');
const routes = Router()
const autores = require('./autores')

routes.use('/autores', autores)
routes.get('/', (req, res) => {
  return res.json({message: 'Hello World'})
})

module.exports = routes