const {Router} = require('express');
const routes = Router()

const parqueUniversitario = require('./parque-universitario')
const vivaReal = require('./viva-real')
const vittaResidencial = require('./vitta-residencial')
const quintaDOeste = require('./quinta-d-oeste')
const villaDiCapri = require('./villa-di-capri')

const routesArray = [
  parqueUniversitario,
  vivaReal,
  vittaResidencial,
  quintaDOeste,
  villaDiCapri,
]
  
routes.use(routesArray)


module.exports = routes
