class NotImplementedError extends Error {
    constructor(method){
        super(`method ${method} has no implementation`)
    }
}
module.exports = class Model {
   
    whereObjectToSQL(object){

        return Object.entries(object).reduce((sql, [key, value]) => sql+=`${key} = ${value}`, ' where ')
    }

    get(config = {select: ['*'], where: {}}){
        throw new NotImplementedError('get')
    }

    getAll({}){
        throw new NotImplementedError('getAll')
    }

    getById(id){
        throw new NotImplementedError('getById')

    }

    create({}){
        throw new NotImplementedError('create')

    }

    update({}){
        throw new NotImplementedError('update')

    }

    delete({}){
        throw new NotImplementedError('delete')
    }
}