const express = require('express');
const dbConnection = require('./models/dealerDB');
const dealerRoutes = require('./routes/dealerRoutes');

// Express app
const dealer = express();
const port = process.env.PORT || 4000;

// middleware 
dealer.use(express.urlencoded({ extended: false }));
dealer.use(express.json());

dealer.use('/dealer', dealerRoutes);

dealer.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' });
});

dealer.listen(port, function () {
    console.log('Server started on port: ' + port);
});