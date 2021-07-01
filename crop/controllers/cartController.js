const Cart = require('../models/cartSchema');

// GET all carts for a user
// GET single cart for a user
viewCart = async (req, res) => {

    if (!req.query.cid && req.query.uid) {
        Cart.find({ dealer_id: req.query.uid }).then(result => {
            if (result) {
                res.send(`all cart details =>
                ${result}`);
            } else {
                res.status(400).send(err.message);
            }
        })
    } else if (req.query.cid && req.query.uid) {
        Cart.find({ _id: req.query.cid, dealer_id: req.query.uid }).then((result) => {
            if (result) {
                res.send(`cart details =>
                ${result}`);
            } else {
                res.status(400).send(err.message);
            }
        })
    }
}

// view bill
viewBill = async (req, res) => {
    try {
        const cartResponse = await Cart.find({ dealer_id: req.params.uid });
        if (cartResponse) {
            var total = 0;
            for (var i =0; i<cartResponse.length; i++){
                total += cartResponse[i].crop_price * cartResponse[i].crop_quantity ;
            }
            res.send(`total price: ${total}`);
        }
        else{
            res.send('cart is empty');
        }
    }
    catch (err) {
        res.send(err);
    }
}

// Create an cart for a user
addCart = async (req, res) => {
    const newCart = {
        "crop_name": req.body.crop_name,
        "dealer_id": req.body.dealer_id,
        "crop_quantity": req.body.crop_quantity,
        "crop_price": req.body.crop_price,
    }

    // Create new cart instance..
    const cart = new Cart(newCart)
    cart.save().then((result) => {
        // new cart details =>
        res.send(result);
    }).catch((err) => {
        res.status(400).send(err.message);
    })
}

// Update a single cart
updateCart = async (req, res) => {
    Cart.findByIdAndUpdate(req.params.cid, req.body)
        .then((result) => {
            res.send(`updated all crop details =>
                ${result}`);
        }).catch((err) => {
            res.status(400).send(err.message)
        })
};

// Delete a single item from cart
removeCart = async (req, res) => {
    Cart.findByIdAndDelete(req.params.cid)
        .then((result) => {
            // removed cart details => 
            if (result) {
                res.send(result)
            } else {
                res.status(400).send('no item is available in cart to display')
            }
        }).catch((err) => {
            res.status(400).send(err.message);
        });
};

// Delete all items from cart for a user
removeCarts = async (req, res) => {
    Cart.findOneAndDelete({ dealer_id: req.query.uid })
        .then((result) => {
            if (result) {
                res.send(result)
            } else {
                res.status(400).send('no items are available in cart to display')
            }
        })
        .catch((err) => {
            res.status(400).send(err.message);
        });
};

module.exports = {
    viewCart,
    viewBill,
    addCart,
    updateCart,
    removeCart,
    removeCarts
}