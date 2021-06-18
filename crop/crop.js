const express = require('express');
const dbConnection = require("./models/cropDB")

// Express app
const app = express();
const port = process.env.PORT || 6000;

app.get('/crop', (req, res) => {
    console.log('Logged as Crop');
    res.send("<h2>Welcome to Crop Page...</h2>");
});

app.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' });
});

app.listen(port, function () {
    console.log('Server started on port: ' + port);
});