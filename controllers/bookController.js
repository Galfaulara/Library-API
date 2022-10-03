const Books = require('../services/bookService')

const cTypeAppJson = {'Content-Type':'application/json'}
//@desc getBooks gets all books in the database
//@route GET /books
async function getBooks(req, res){
    try {
        const books = await Books.findAllBooks()
        const titles = books.map(book => {
            return {
                id:book.id,
                title: book.title,
                description: book.description,
                totalPages: book.totalPages
            }
        })
        res.writeHead(200, cTypeAppJson)
        res.end(JSON.stringify(titles))
    } catch (error) {
        console.log(error)
    }
}

//@desc getBook gets single Book from database
//@route GET /book/:id
async function getBook(req, res, id){
    try {
        const book = await Books.findBookByID(id)

        if(!book){
            res.writeHead(404, cTypeAppJson)
            res.end(JSON.stringify({message: `Product Not Found, searching for ${id}`}))

        } else {
            res.writeHead(200, cTypeAppJson)
            res.end(JSON.stringify(book.title))
        }


    } catch (error) {
        console.log(error)
    }
}

//@desc getBookPage gets single Book from database and display the desired page
//@route GET /book/:id/page/:page/html
async function getBookPage(req, res, id, page, contentType){
    try {
        const book = await Books.findBookByID(id)

        if(!book || (book.totalPages < page) || page==0){
            res.writeHead(404, cTypeAppJson)
            if(book.totalPages<page || page==0){
                res.end(JSON.stringify({message: `Page Not Found, searching for page ${page} out of ${book.totalPages}`}))
            } else{
                res.end(JSON.stringify({message: `Book Not Found, searching for ${id}`}))
            }

        } else {
            if(contentType=='html'){
                res.writeHead(200, cTypeAppJson)
                res.end(`${book.pages[page-1].contentHtml}`)
            } else if (contentType=='text'){
                res.writeHead(200, cTypeAppJson)
                res.end(`${book.pages[page-1].contentText}`)
            } else {
                res.end(JSON.stringify({message: `Searching for undefined format of: ${contentType}`}))
            }
        }

    } catch (error) {
        console.log(error)
    }
}

async function notFound(req, res){
    res.writeHead(404, cTypeAppJson)
    res.end(JSON.stringify({message: 'Route not found'}))
}


module.exports = {
    getBooks,
    getBook,
    getBookPage,
    notFound
}