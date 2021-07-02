const stripe = require('stripe')('sk_test_51J8UApSHNp8jJtuJnVWTjUTKH7BcgnEBtFLfnUKQWyZENDbFO3V4JJA1yh62bDg7Mfhqnp0ve1cqUzyBLTD58Rmr00JtpCWHBU');

exports.payment = async (req, res) => {

    const price = req.body.price * 100;
    const oid = req.params.uid;

    // customer details
    stripe.customers.create({
        name: req.body.name,
        email: req.body.email,
        source: 'tok_mastercard',
        address: {
            line1: req.body.address.street,
            city: req.body.address.city,
            state: req.body.address.state,
            country: 'India',
            postal_code: req.body.address.zip
        }
    })
        .then((customer) => {

            return stripe.charges.create({
                amount: price,     // Charing in Rs
                description: 'Agricultural crops',
                currency: 'inr',
                customer: customer.id,
                metadata: { 'order_id': oid }
            });
        })
        .then((charge) => {
            res.send(`Payment done successfully for ${req.body.email} of Rs. ${price / 100}
            and to see receipt ${charge.receipt_url}
            `);    // If no error occurs
        })
        .catch((err) => {
            res.status(400).send(err);  // If some error occurs
        });
}