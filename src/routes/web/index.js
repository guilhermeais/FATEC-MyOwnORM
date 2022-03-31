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
        description: 'Veja os mais novos imóveis da Parra',
        image: '/public/images/mordern_construction.jpg',
        alt: 'parralogo',
        link: '/web/parra',
        active: true
      },
      
      {
        title: 'Projeto',
        description: 'Projetos variados',
        image: '/public/images/construction_high_quality.jpg',
        alt: 'projetoslogo',
        link: '/web/projeto',
        active: false
      },
      {
        title: 'Pacaembu',
        description: 'Veja os mais novos imóveis da construtora Pacaembu',
        image: '/public/images/technology-image.webp',
        alt: 'parralogo',
        link: '/web/pacaembu',
        active: false
      },
      {
        title: 'Perplan',
        description: 'Empreendimentos Perplan que estão prestes a ser lançados',
        image: '/public/images/bg-emp2.jpg',
        alt: 'parralogo',
        link: '/web/perplan',
        active: false
      },
      {
        title: 'MRV',
        description: 'Conquiste seu apê na MRV',
        image: '/public/images/ape_mrv.jpg',
        alt: 'mrvlogo',
        link: '/web/mrv',
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