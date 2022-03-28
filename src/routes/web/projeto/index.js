const {Router} = require('express');
const routes = Router()
const childrens = require('./childrens')
routes.use(childrens)

const PREFIX = '/web/projeto'
routes.get('/', (req, res) => {
  return res.render('pages/projeto/projeto.ejs', {
    title: 'Projeto',
    menu: [
      {
        name: 'Voltar', 
        href: '/web'
      },
      {
        name: 'Parque Universitário',
        href: `${PREFIX}/parque-universitario`,
      },
      {
        name: 'Villa Di Capri',
        href: `${PREFIX}/villa-di-capri`
      },
      {
        name: 'Vitta Residencial',
        href: `${PREFIX}/vitta-residencial`
      },
      {
        name: 'Quinta D\' Oeste',
        href: `${PREFIX}/quinta-d-oeste`
      },
      {
        name: 'Viva Real',
        href: `${PREFIX}/viva-real`
      },
    ]
  })
})

module.exports = routes