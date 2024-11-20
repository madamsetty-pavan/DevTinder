const mongoose = require("mongoose");

const connectDB = async () => {
    // this will return a promise
    // so we will write in async and await
    // this will help us to wait until the promise gets resolved
    await mongoose.connect("mongodb+srv://pavanmadamsetty18:dXpvspAYMA82-uv@cluster0.92ksz.mongodb.net/devTinder");
    // console.log("Connected to Database from database.js");
}

// We will export it and connect to the db in app.js
// we will use it to wait until the db is connected
module.exports = connectDB; 

