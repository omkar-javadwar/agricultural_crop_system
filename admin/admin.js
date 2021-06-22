const express = require('express');
const dbConnection = require('./models/adminDB');
const adminRoutes = require('./routes/adminRoutes');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Express app
const admin = express();
const port = process.env.PORT || 3000;

// middleware 
admin.use(express.urlencoded({ extended: false }));
admin.use(express.json());

const options = {
    definition: {
        openapi: '3.0.3',
        info: {
            title: 'Admin API',
            version: '1.0.0',
        },
        servers: [
            {
                url: `http://localhost:${port}`,
                description: 'Development server',
            },
        ],
    },
    // Paths to files containing OpenAPI definitions
    apis: ['./routes/adminRoutes.js'],
};

const specs = swaggerJSDoc(options);

admin.use('/admin', adminRoutes);

admin.use('/admin-api', swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }));

admin.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' });
});

module.exports = admin.listen(port, function () {
    console.log('Server started on port: ' + port);
});