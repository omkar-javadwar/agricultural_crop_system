const express = require('express');
const dbConnection = require("./models/farmerDB")

// Express app
const app = express();
const port = process.env.PORT || 5000;

app.get('/farmer', (req, res) => {
    console.log("Logged as Farmer")
    res.send("<h2>Welcome to Farmer Page...</h2>");
});

app.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' });
});

app.listen(port, function () {
    console.log('Server started on port: ' + port);
});