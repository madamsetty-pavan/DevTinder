const express = require('express');

const app = express();

app.use("/test", (req, res) => {
    res.send("Test");
});

app.listen(3000, () => {
    console.log("Successfull created server");
});

app.listen(7776);