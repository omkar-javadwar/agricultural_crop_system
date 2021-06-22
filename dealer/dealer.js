const express = require('express');
const dbConnection = require('./models/dealerDB');
const dealerRoutes = require('./routes/dealerRoutes');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Express app
const dealer = express();
const port = process.env.PORT || 4000;

// middleware 
dealer.use(express.urlencoded({ extended: false }));
dealer.use(express.json());

dealer.use('/dealer', dealerRoutes);

const options = {
    definition: {
        openapi: '3.0.3',
        info: {
            title: 'Dealer API',
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
    apis: ['./routes/dealerRoutes.js'],
};

const specs = swaggerJSDoc(options);

dealer.use('/dealer-api', swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }));

dealer.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' });
});

dealer.listen(port, function () {
    console.log('Server started on port: ' + port);
});