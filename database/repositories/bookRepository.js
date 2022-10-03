const { booksModel } = require('../models/bookModel')

const findAllBooks = async () => {

    return await booksModel.find({})

}

const findBookByID = async (id) => {

    return await booksModel.findOne({id: id})

}


module.exports = {
    findAllBooks,
    findBookByID
}
