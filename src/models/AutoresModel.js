const { query } = require('../database')
const Model = require('./_Model')
module.exports = class Autores extends Model {
   async get(config = {select: ['*'], where: {}}){
        const whereValues = config.where
        const selectValues = config.select 

        let query = `select ${selectValues.join(', ')} from autores `

        if(whereValues.length > 0){
            query += Object.entries(whereValues).map(([key, value]) => `${key} = ${value}`)
        }
   }

    
}