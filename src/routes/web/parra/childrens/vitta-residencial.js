const {Router} = require('express');
const routes = Router()

const PREFIX = '/web/parra'

routes.get('/vitta-residencial', (req, res) => {
  return res.render('pages/parra/vitta-residencial.ejs', {
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