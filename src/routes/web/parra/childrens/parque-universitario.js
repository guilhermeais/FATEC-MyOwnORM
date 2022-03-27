const {Router} = require('express');
const routes = Router()

const PREFIX = '/web/parra'

routes.get('/parque-universitario', (req, res) => {
  return res.render('pages/parra/parque-universitario.ejs', {
    title: 'Parque Universitário',
    menu: [
      {
        name: 'Voltar', 
        href: PREFIX
      },
     
    ]
  })
})

module.exports = routes