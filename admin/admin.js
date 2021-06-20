const express = require('express');
const dbConnection = require('./models/adminDB');
const adminRoutes = require('./routes/adminRoutes');

// Express app
const admin = express();
const port = process.env.PORT || 3000;

// middleware 
admin.use(express.urlencoded({ extended: false }));
admin.use(express.json());

admin.use('/admin', adminRoutes);

admin.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' });
});

admin.listen(port, function () {
    console.log('Server started on port: ' + port);
});