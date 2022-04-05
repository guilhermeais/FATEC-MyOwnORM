class NotImplementedError extends Error {
    constructor(method){
        super(`method ${method} has no implementation`)
    }
}
module.exports = class Model {
    get({}){
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