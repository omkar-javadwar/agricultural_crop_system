const express = require('express');
const dbConnection = require("./models/dealerDB")

// Express app
const app = express();
const port = process.env.PORT || 4000;

app.get('/dealer', (req, res) => {
    console.log('Logged as Dealer');
    res.send("<h2>Welcome to Dealer Page...</h2>");
});

app.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' });
});

app.listen(port, function () {
    console.log('Server started on port: ' + port);
});