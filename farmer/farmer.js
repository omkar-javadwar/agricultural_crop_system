const express = require('express');
const dbConnection = require('./models/farmerDB');
const farmerRoutes = require('./routes/farmerRoutes');
const bankDetailsRoutes = require('./routes/bankDetailsRoutes');

// Express app
const farmer = express();
const port = process.env.PORT || 5000;

// middleware 
farmer.use(express.urlencoded({ extended: false }));
farmer.use(express.json());

farmer.use('/farmer', farmerRoutes);
farmer.use('/bank_details', bankDetailsRoutes);

farmer.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' });
});

farmer.listen(port, function () {
    console.log('Server started on port: ' + port);
});