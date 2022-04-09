const { executeQuery } = require('../database')
const Model = require('./_Model')

class Autores extends Model {
    async find({select = ['*'], where = {}}){
         const whereValues = where
         const selectValues = select 
 
         let query = `select ${selectValues.join(', ')} from autores `
 
         if(Object.keys(whereValues).length > 0){
             const whereToSql = this.whereObjectToSQL(whereValues)
             query += whereToSql
         }
 
         const result = await executeQuery(query)
 
         return result
    }
    
    async create() {
        
    }
     
 }

module.exports = new Autores();