const express = require('express');
const dbConnection = require('./models/cropDB');
const cropRoutes = require('./routes/cropRoutes');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Express app
const crop = express();
const port = process.env.PORT || 3001;

// middleware 
crop.use(express.urlencoded({ extended: false }));
crop.use(express.json());

const options = {
    definition: {
        openapi: '3.0.3',
        info: {
            title: 'Crop API',
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
    apis: ['./routes/cropRoutes.js'],
};

const specs = swaggerJSDoc(options);

crop.use('/crop', cropRoutes);

crop.use('/crop-api', swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }));

crop.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' });
});

module.exports = crop.listen(port, function () {
    console.log('Server started on port: ' + port);
});