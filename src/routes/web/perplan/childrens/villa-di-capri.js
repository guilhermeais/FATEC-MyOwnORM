const {Router} = require('express');
const routes = Router()

const PREFIX = '/web/pacaembu'

routes.get('/villa-di-capri', (req, res) => {
  return res.render('pages/pacaembu/villa-di-capri.ejs', {
    title: 'Villa Di Capri',
    menu: [
      {
        name: 'Voltar', 
        href: PREFIX
      },
     
    ]
  })
})

module.exports = routes