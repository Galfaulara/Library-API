const {Schema, model} = require('mongoose')

const booksSchema = new Schema({
    id: {type: String, required: false},
    title: {type: String, required: false},
    subtitle: {type: String, required: false},
    author: {type: String, required: false},
    published: {type: String, required: false},
    publisher: {type: String, required: false},
    totalPages: {type: Number, required: false},
    description: {type: String, required: false},
    website: {type: String, required: false},
    pages: {type: Array, required: false},

})

const booksModel =  model('books', booksSchema);

module.exports = {
    booksModel
}

