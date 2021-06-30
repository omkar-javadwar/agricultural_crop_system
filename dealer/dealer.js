const express = require('express');
const dbConnection = require('./models/dealerDB');
const dealerRoutes = require('./routes/dealerRoutes');
const cartRoutes = require('./routes/cartRoutes');
const farmerRoutes = require('./routes/farmerRoutes');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const cookieParser = require('cookie-parser');

// Express app
const dealer = express();
const port = process.env.PORT || 4000;

// middleware 
dealer.use(express.urlencoded({ extended: false }));
dealer.use(express.json());
dealer.use(cookieParser());

dealer.use('/dealer', dealerRoutes, cartRoutes, farmerRoutes);

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
    apis: ['./routes/*.js'],
};

const specs = swaggerJSDoc(options);

dealer.use('/dealer-docs', swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }));

dealer.get('/logout', async (req, res) => {
    try {
        res.clearCookie('jwt');
        res.send('dealer logout successfully');
    } catch (error) {
        console.log(error);
    }
});

dealer.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' });
});

module.exports = dealer.listen(port, function () {
    console.log('Server started on port: ' + port);
});