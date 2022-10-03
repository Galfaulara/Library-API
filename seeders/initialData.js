require('dotenv').config();
const { connectionDB } = require('../database/connectionDB')
const { booksModel } = require('../database/models/bookModel')
const books = require('./data/books.json')

const initialData = async () => {
    await connectionDB()
    booksModel.insertMany(books, (error, docs) => {
        if (error) {
            console.log(error)
        } else {
            console.log('Initial data loaded')
            process.exit(1)
        }
    })
}

initialData()