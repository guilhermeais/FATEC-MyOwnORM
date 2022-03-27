const {Router} = require('express');
const routes = Router()

const PREFIX = '/web/parra'

routes.get('/viva-real', (req, res) => {
  return res.render('pages/parra/viva-real.ejs', {
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