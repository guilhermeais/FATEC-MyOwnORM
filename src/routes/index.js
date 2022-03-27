const {Router} = require('express');
const routes = Router()

const apiRoutes = require('./api')
const webRoutes = require('./web')

routes.use('/api', apiRoutes)
routes.use('/web', webRoutes)

module.exports = routes
