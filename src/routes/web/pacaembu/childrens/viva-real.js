const {Router} = require('express');
const routes = Router()

const PREFIX = '/web/pacaembu'

routes.get('/viva-real', (req, res) => {
  return res.render('pages/pacaembu/viva-real.ejs', {
    title: 'Viva Real',
    menu: [
      {
        name: 'Voltar', 
        href: PREFIX
      },
     
    ]
  })
})

module.exports = routes