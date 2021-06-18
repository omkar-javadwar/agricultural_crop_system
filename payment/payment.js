const express = require('express');
const dbConnection = require('./models/paymentDB')

// Express app
const app = express();
const port = process.env.PORT || 7000;

app.get('/payment', (req, res) => {
    console.log('Logged as Payment');
    res.send("<h2>Welcome to Payment Page...</h2>");
});

app.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' });
});

app.listen(port, function () {
    console.log('Server started on port: ' + port);
});