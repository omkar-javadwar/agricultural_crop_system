const express = require('express');
const dbConnection = require('./models/farmerDB');
const farmerRoutes = require('./routes/farmerRoutes');
const bankDetailsRoutes = require('./routes/bankDetailsRoutes');
const cropRoutes = require('./routes/cropRoutes');
const cookieParser = require('cookie-parser');

const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Express app
const farmer = express();
const port = process.env.PORT || 5000;

// middleware 
farmer.use(express.urlencoded({ extended: false }));
farmer.use(express.json());
farmer.use(cookieParser());

farmer.use('/farmer', farmerRoutes, cropRoutes);
farmer.use('/bank_details', bankDetailsRoutes);

const options = {
    definition: {
        openapi: '3.0.3',
        info: {
            title: 'Farmer API',
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

farmer.use('/farmer-docs', swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }));

farmer.get('/logout', async (req, res) => {
    try {
        res.clearCookie('jwt');
        res.send('farmer logout successfully');
    } catch (error) {
        console.log(error);
    }
});

farmer.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' });
});

farmer.listen(port, function () {
    console.log('Server started on port: ' + port);
});