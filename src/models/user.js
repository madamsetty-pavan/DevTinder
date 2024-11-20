const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    emailId: {
        type: String
    },
    password: {
        type: String
    }, 
    phoneNo: {
        type: Number
    },
    gender: {
        type: String
    },
    age: {
        type: Number
    }
});

module.exports = new mongoose.model("User", userSchema);

