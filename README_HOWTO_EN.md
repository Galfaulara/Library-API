# API library
Library made in NodeJS, using MongoDB.

## Steps to use the project:

1) Run npm install

2) Create environment variables file (.env) for the connection to the database, and definition of the port to use.
     **Variable names and default values:**
     
        MONGODB_HOST_GAAL_API="localhost:27017"

            
        MONGODB_DATABASE="library"

        
        PORT=3000

3) Before initializing the project, run: npm run loadTestData. This will upload the test JSON file to a MongoDB database.

4) run npm start

**Example URL format for API consumption:**

    http://localhost:3000/books (To get a full list of books)
    
    http://localhost:3000/book/1 (To get the title of the book with Id: 1)
    
    http://localhost:3000/book/1/page/1/ (There will be no return, the content format must be specified)
    
    http://localhost:3000/book/1/page/2/text (To get book content 1 page 2 text format)
    
    http://localhost:3000/book/1/page/2/html (To get book content 1 page 2 html format)