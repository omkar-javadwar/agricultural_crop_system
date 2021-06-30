const Cart = require('../models/cartSchema');

exports.viewDealerCart = async (req, res) => {
    try {
        const cartResponse = await Cart.find({ user_id: req.params.uid });
        if (cartResponse) {
            var total = 0;
            for (var i =0; i<cartResponse.length; i++){
                total += cartResponse[i].crop_price * cartResponse[i].crop_quantity ;
            }
            res.send(`Total price: ${total}`);
        }
        else{
            res.send('cart is empty');
        }
    }
    catch (err) {
        res.send(err);
    }
}