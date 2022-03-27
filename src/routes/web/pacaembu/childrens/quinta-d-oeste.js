const {Router} = require('express');
const routes = Router()

const PREFIX = '/web/pacaembu'

routes.get('/quinta-d-oeste', (req, res) => {
  return res.render('pages/pacaembu/quinta-d-oeste.ejs', {
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