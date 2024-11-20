const middleware = (req, res, next) => {
    console.log("Test from middleware");
    const token = "test";
    if(token === req.query.token) {
        next();
    } else {
        res.status(401).send("Invalid token");
    }
};

const middleware2 = (req,res,next) => {
    if(req.body.password === 'password') {
        next();
    } else {
        res.status(401).send("Wrong password");
    }

}

module.exports = {middleware, middleware2};