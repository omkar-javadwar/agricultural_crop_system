const express = require('express');
const dbConnection = require("./models/paymentDB")
const paymentRoutes = require('./routes/paymentRoutes')

// Express app
const payment = express();
const port = process.env.PORT || 7000;

// middleware 
payment.use(express.urlencoded({ extended: false }));
payment.use(express.json());

payment.use('/payment', paymentRoutes);

payment.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' });
});

payment.listen(port, function () {
    console.log('Server started on port: ' + port);
});