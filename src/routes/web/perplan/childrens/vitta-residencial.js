const {Router} = require('express');
const routes = Router()

const PREFIX = '/web/pacaembu'

routes.get('/vitta-residencial', (req, res) => {
  return res.render('pages/pacaembu/vitta-residencial.ejs', {
    title: 'Vitta Residencial',
    menu: [
      {
        name: 'Voltar', 
        href: PREFIX
      },
     
    ]
  })
})

module.exports = routes