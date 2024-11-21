const express = require('express');
const connectDB = require('./config/database');
const User = require('./models/user');

const { getProfile, postPutProfile, deleteProfile } = require("./controllers/profile");
const app = express();
app.use(express.json());

connectDB().then(() => {
    console.log("Successfully connected to Database");
    // Why? : We are writing it here so that only after we connect to
    // DB, we will establish the connection
    app.listen(3000, () => {
        console.log("Successfully created server");
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

// Profile router
app.get("/profile", getProfile);
app.post("/profile", postPutProfile);
app.patch("/profile", postPutProfile);
app.delete("/profile", deleteProfile);

app.post("/login", async (req, res) => {
    const query = req.query;
    const dBField = await User.find({emaildId:query.emaildId});
    console.log(query);
    console.log(dBField);
    if (dBField[0].emailId === query.emailId 
            && dBField[0].password === query.password ) {
                res.send("Login Successful");
    } else {
        res.status(401).send("Login unsuccessful. Email id or password incorrect");
    }
});

app.get("/feed", async (req, res) => {
    try {
        const allProfiles = await User.find({});
        res.send(allProfiles);
    } catch (error) {
        console.error(error);
        res.status(500).send("Something went wrong");
    }
});

// Any error that occurs
app.use("/" , (err, req, res, next) => {
    if(err) {
        res.status(500).send(err.message);
    }
});