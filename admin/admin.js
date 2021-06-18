const express = require('express');
const dbConnection = require("./models/adminDB")

// Express app
const app = express();
const port = process.env.PORT || 3000;

app.get('/admin', (req, res) => {
    console.log('Logged as Admin');
    res.send("<h2>Welcome to Admin Page...</h2>");
});

app.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' });
});

app.listen(port, function () {
    console.log('Server started on port: ' + port);
});