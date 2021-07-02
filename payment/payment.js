const express = require('express');
const paymentRoutes = require('./routes/paymentRoutes');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
var cors = require('cors');

// Express app
const payment = express();
const port = process.env.PORT || 7000;

// middleware 
payment.use(express.urlencoded({ extended: false }));
payment.use(express.json());
payment.use(cors());

payment.use('/payment', paymentRoutes);

const options = {
    definition: {
        openapi: '3.0.3',
        info: {
            title: 'Payment API',
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

payment.use('/payment-docs', swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }));

payment.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' });
});

payment.listen(port, function (error) {
    if (error) throw error
    console.log('Server started on port: ' + port);
})
