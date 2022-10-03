const repository = require('../database/repositories/bookRepository')

const findAllBooks = async () => {
    try {
        const allBooks = await repository.findAllBooks()
        return allBooks
        
    } catch (error) {
        throw(error)
    }
}

const findBookByID = async (id) => {
    try {
        const bookByID = await repository.findBookByID(id)
        return bookByID
        
    } catch (error) {
        throw(error)
    }

    
}


module.exports = {
    findAllBooks,
    findBookByID
}
