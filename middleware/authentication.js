const jwt = require('jsonwebtoken');

module.exports = async function isAuthenticated(req, res, next) {
    const token = req.cookies.jwt;
    jwt.verify(token, 'mysecretkey', (err, user) => {
        if (err) {
            res.status(404).send('Access denied');
        } else {
            req.user = user;
            next();
        }
    })
};