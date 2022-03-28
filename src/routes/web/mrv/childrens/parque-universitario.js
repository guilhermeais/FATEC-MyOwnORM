const {Router} = require('express');
const routes = Router()

const PREFIX = '/web/pacaembu'

routes.get('/parque-universitario', (req, res) => {
  console.log('parque universitário was called')
  return res.render('pages/pacaembu/parque-universitario.ejs', {
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