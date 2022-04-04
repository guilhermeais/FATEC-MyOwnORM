const {Router} = require('express');
const routes = Router()

const apiRoutes = require('./api')
const webRoutes = require('./web')

routes.use('/api', apiRoutes)
routes.use('/web', webRoutes)

routes.all('*', (req, res) => {
    return res.redirect(301, '/web')
})

module.exports = routes
