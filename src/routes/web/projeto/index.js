const {Router} = require('express');
const routes = Router()
const childrens = require('./childrens')
routes.use(childrens)

const PREFIX = '/web/pacaembu'
routes.get('/', (req, res) => {
  return res.render('pages/pacaembu/pacaembu.ejs', {
    title: 'Pacaembú',
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