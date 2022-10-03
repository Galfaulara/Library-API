const mongoose = require('mongoose')

const {MONGODB_HOST_GAAL_API, MONGODB_DATABASE} = process.env
const host = MONGODB_HOST_GAAL_API || "localhost:27017"
const database = MONGODB_DATABASE || "library"

const MONGODB_URI = `mongodb://${host}/${database}`

const connectionDB = async () => {
    console.log('Connecting to DB');
    console.log(MONGODB_URI);
    await mongoose.connect(MONGODB_URI , {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    console.log('DB is connected')
}

module.exports = {
    connectionDB
}
