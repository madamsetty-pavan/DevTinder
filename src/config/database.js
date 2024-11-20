require('dotenv').config(); // Load .env variables
const mongoose = require("mongoose");


const connectDB = async () => {
    // this will return a promise
    // so we will write in async and await
    // this will help us to wait until the promise gets resolved
    // eslint-disable-next-line no-undef
    const mongoURI = process.env.MONGODB_URI;
    // console.log(mongoURI);
    await mongoose.connect(mongoURI);
    // console.log("Connected to Database from database.js");
}

// We will export it and connect to the db in app.js
// we will use it to wait until the db is connected
module.exports = connectDB; 

