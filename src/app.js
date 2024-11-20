const express = require('express');
const connectDB = require('./config/database');
const User = require('./models/user');

const app = express();

app.use(express.json());

connectDB().then(() => {
    console.log("Successfully connected to Database");
    // Why? : We are writing it here so that only after we connect to
    // DB, we will establish the connection
    app.listen(3000, () => {
        console.log("Successfull created server");
    });
}).catch(() => {
    console.log("Couldn't connect to the database");
});


app.post("/signup", async (req, res) => {
    try {
      const newUser = req.body; // Extract user details from request body
      console.log(newUser);
  
      // Create a new user instance
      const user = new User(newUser);
  
      // Save the user to the database
      await user.save();
  
      // Send success response
      res.send("Successfully created a user");
    } catch (error) {
      // Handle errors
      console.error(error);
      res.status(500).send("Something went wrong");
    }
  });
  