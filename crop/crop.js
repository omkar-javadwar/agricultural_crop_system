const express = require('express');
const dbConnection = require('./models/cropDB');
const cropRoutes = require('./routes/cropRoutes');

// Express app
const crop = express();
const port = process.env.PORT || 6000;

// middleware 
crop.use(express.urlencoded({ extended: false }));
crop.use(express.json());

crop.use('/crop', cropRoutes);

crop.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' });
});

crop.listen(port, function () {
    console.log('Server started on port: ' + port);
});