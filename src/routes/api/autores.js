const { Router } = require('express');
const { AutoresController } = require('../../controllers/api');
const routes = Router()

routes.get('/:id?', AutoresController.get)

routes.post('/', AutoresController.create)

routes.put('/', AutoresController.update)

routes.delete('/', AutoresController.delete)

module.exports = routes