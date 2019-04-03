const express = require("express");
const router = express.Router();
const Cart = require("../../models/Cart");
router.post("/add", (req, res) => {
    Cart
        .findOne({ $and: [ { sessionId: req.body.sessionId }, { status: 'inCart' } ] })
        .then(item => {
            if (item) {
                let updatedCartItems = item.cartItems;
                updatedCartItems.push(req.body.cartItems);
                item
                    .updateOne({$set: {"cartItems":updatedCartItems}},{new: true})
                    .then(cart =>res.json(cart))
                    .catch(err => console.log(err))

            }else{
                let cartItem = [];
                cartItem.push(req.body.cartItems);
                const cart = new Cart({
                    sessionId: req.body.sessionId,
                    status: 'inCart',
                    total: req.body.total,
                    cartItems: cartItem,
                });
                cart
                    .save()
                    .then(cart => res.json(cart))
                    .catch(err => console.log(err));
            }
        });
})
router.post("/makeOrder", (req, res) => {
    Cart
        .findOne({ $and: [ { sessionId: req.body.sessionId }, { status: 'inCart' } ] })
        .then(item => {
            if (item) {
                item
                    .updateOne({$set: {"status":'makeOrder'}})
                    .then(cart =>res.json(cart))
                    .catch(err => console.log(err))

            }
        });
})
router.get("/get", (req,res) => {
    Cart
        .find()
        .then(carts => res.send(carts))
        .catch(err => console.log(err))
})
router.post("/getCartItems", (req,res) => {
    Cart
        .findOne({ $and: [ { sessionId: req.body.sessionId }, { status: 'inCart' } ] })
        .then(cart => res.send(cart))
        .catch(err => console.log(err))
})
module.exports = router;