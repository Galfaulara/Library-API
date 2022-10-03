require('./config/initialization')

const http = require('http')
const { getBooks, 
        getBook, 
        getBookPage, 
        notFound } = require('./controllers/bookController')

const server = http.createServer((req, res) => {

    if(req.url === '/books' && req.method === 'GET'){
        getBooks(req,res)
    } 
    
    else if (req.url.match(/\/book\/([0-9]+)\/page\/([0-9]+)\/\w/)){

        const id = req.url.split('/')[2]
        const page = req.url.split('/')[4]
        const contentType = req.url.split('/')[5]
        getBookPage(req, res, id, page, contentType)

    }
    
    else if (req.url.match(/^\/book\/([0-9]+)$/)){

        const id = req.url.split('/')[2]
        getBook(req, res, id)

    } else {
        notFound(req, res)
    }


})

const PORT= process.env.PORT || 3000 //Se debe colocar el puerto que utilizará el servidor

server.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))