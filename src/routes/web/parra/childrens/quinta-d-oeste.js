const {Router} = require('express');
const routes = Router()

const PREFIX = '/web/parra'

routes.get('/quinta-d-oeste', (req, res) => {
  return res.render('pages/parra/quinta-d-oeste.ejs', {
    title: 'Quita D\' Oeste',
    menu: [
      {
        name: 'Voltar', 
        href: PREFIX
      },
     
    ]
  })
})

module.exports = routes