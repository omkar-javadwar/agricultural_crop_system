const express = require('express');
const dbConnection = require('./models/adminDB');
const adminRoutes = require('./routes/adminRoutes');
const farmerRouters = require('./routes/farmerRouters');
const dealerRouters = require('./routes/dealerRouters');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const cookieParser = require('cookie-parser');

// Express app
const admin = express();
const port = process.env.PORT || 3000;

// middleware 
admin.use(express.urlencoded({ extended: false }));
admin.use(express.json());
admin.use(cookieParser());

admin.get('/home', (req, res) =>{res.send('welcome to admin')});

admin.use('/admin', adminRoutes);
admin.use('/farmer', farmerRouters);
admin.use('/dealer', dealerRouters);

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
    apis: ['./routes/*.js'],
};

const specs = swaggerJSDoc(options);

admin.use('/admin-docs', swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }));

admin.get('/logout', async (req, res) => {
    try {
        res.clearCookie('jwt');
        res.send('admin logout successfully');
    } catch (error) {
        console.log(error);
    }
});

admin.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' });
});

module.exports = admin.listen(port, function () {
    console.log('Server started on port: ' + port);
});