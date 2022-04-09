const Autores = require('../../models/AutoresModel')

class AutoresController {
  async get(req, res){
    try {
      const { id } = req.params
    let whereObject = {}
    if(id){
      whereObject.aut_codigo = id
    }

    const autores = await Autores.find({where: whereObject})

    return res.status(200).json(autores)
    } catch (error) {
      console.error('Error on find Autores', error)
      return res.status(500).json({error})
    }
  }

  async create(req, res){
    
  }

  async update(req, res){

  }

  async delete(req, res){

  }
}

module.exports = new AutoresController()