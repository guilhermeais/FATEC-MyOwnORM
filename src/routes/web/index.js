const { Router } = require('express');
const routes = Router()
const parra = require('./parra')
const pacaembu = require('./pacaembu')


routes.use('/pacaembu',pacaembu)
routes.use('/parra',parra)

routes.get('/', (req, res) => {
  return res.render('pages/index.ejs', {
    title: 'Home',
    menu: [
      {
        name: 'Parra',
        href: '/web/parra',
      },
      {
        name: 'Projeto',
        href: '/web/projeto'
      },
      {
        name: 'Pacaembu',
        href: '/web/pacaembu'
      },
      {
        name: 'Perplan',
        href: '/web/perplan'
      },
      {
        name: 'MRV',
        href: '/web/mrv'
      },
    ]
  })
})

module.exports = routes