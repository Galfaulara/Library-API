# Biblioteca API 
Librería hecha en NodeJS, utilizando MongoDB.

## Pasos para utilizar el proyecto:

1) Ejecutar npm install

2) Crear archivo de variables de entorno (.env) para la conexión a la base de datos, y definición del puerto de uso.
     **Los nombres de las variables y valor por defecto:**
     
        MONGODB_HOST_GAAL_API="localhost:27017"

            
        MONGODB_DATABASE="library"

        
        PORT=3000

3) Antes de inicializar el proyecto, ejecutar: npm run loadTestData. Esto cargara el archivo de prueba JSON a una base da datos en MongoDB.

4) ejecutar npm start

**Ejemplo de formato de URL para consumo de API:**

    http://localhost:3000/books (Para obtener listado completo de libros)
    
    http://localhost:3000/book/1 (Para obtener el título del libro con Id: 1)
    
    http://localhost:3000/book/1/page/1/ (No habra retorno, se debe especificar el formato del contenido)
    
    http://localhost:3000/book/1/page/2/text (Para obtener contenido de libro 1 pagina 2 formato texto)
    
    http://localhost:3000/book/1/page/2/html (Para obtener contenido de libro 1 pagina 2 formato html)