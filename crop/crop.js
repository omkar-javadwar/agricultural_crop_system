const express = require('express');
const dbConnection = require('./models/cropDB');
const cropRoutes = require('./routes/cropRoutes');
const cartRoutes = require('./routes/cartRoutes');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Express app
const crop = express();
const port = process.env.PORT || 3001;

// middleware 
crop.use(express.urlencoded({ extended: false }));
crop.use(express.json());

// route for crop
crop.use('/crop', cropRoutes);

// route for cart
crop.use('/cart', cartRoutes);

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
    apis: ['./routes/*.js'],
};

const specs = swaggerJSDoc(options);

crop.use('/crop-docs', swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }));

crop.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' });
});

module.exports = crop.listen(port, function () {
    console.log('Server started on port: ' + port);
});