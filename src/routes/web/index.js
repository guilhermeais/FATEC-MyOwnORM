const { Router } = require('express');
const routes = Router()
const parra = require('./parra')
const pacaembu = require('./pacaembu')
const mrv = require('./mrv')
const perplan = require('./perplan')
const projeto = require('./projeto')


routes.use('/pacaembu', pacaembu)
routes.use('/parra', parra)
routes.use('/mrv', mrv)
routes.use('/perplan', perplan)
routes.use('/projeto', projeto)

routes.get('/', (req, res) => {
  return res.render('pages/index.ejs', {
    title: 'Home',
    carouselItems: [
      {
        title: 'Parra',
        description: 'Empreendimentos Parra',
        image: '/public/images/construction_parra.jpg',
        alt: 'parralogo',
        link: '/web/parra',
        active: true
      },
      {
        title: 'Pacaembu',
        description: 'Empreendimentos Pacaembu',
        image: '/public/images/construction.jpg',
        alt: 'parralogo',
        link: '/web/pacaembu',
        active: false
      },
      {
        title: 'Perplan',
        description: 'Empreendimentos Perplan',
        image: '/public/images/construction.jpg',
        alt: 'parralogo',
        link: '/web/perplan',
        active: false
      }
    ],  
    menu: [
      {
        name: 'Parra',
        href: '/web/parra',
      },
      {
        name: 'Projeto',
        href: '/web/projeto'
      },
      {
        name: 'Pacaembu',
        href: '/web/pacaembu'
      },
      {
        name: 'Perplan',
        href: '/web/perplan'
      },
      {
        name: 'MRV',
        href: '/web/mrv'
      },
    ]
  })
})

module.exports = routes