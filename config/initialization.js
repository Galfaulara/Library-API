require('dotenv').config();
const { connectionDB } = require('../database/connectionDB')

const initialSetup = async () => {
    console.log("Starting initial setup");
    await connectionDB()
    console.log("Initial setup finished");
}

initialSetup()