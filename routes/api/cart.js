const express = require("express");
const router = express.Router();
const Cart = require("../../models/Cart");
router.post("/add", (req, res) => {
    Cart
        .findOne({ $and: [ { sessionId: req.body.sessionId }, { status: 'inCart' } ] })
        .then(item => {
            if (item) {
                let updatedCartItems = item.cartItems;
                let inCommingProduct = req.body.cartItems.product;
                let total = 0;
                let index = updatedCartItems.findIndex(obj => {return obj.product.pid == inCommingProduct.pid && obj.product.source == inCommingProduct.source});
                if(index != -1){
                    updatedCartItems[index].quantity += req.body.cartItems.quantity;
                    updatedCartItems[index].total += req.body.cartItems.total;
                    total = item.total + parseInt(req.body.cartItems.total);
                }else{
                    updatedCartItems.push(req.body.cartItems);
                    total = item.total + req.body.cartItems.total;
                }
                item
                    .updateOne({$set: {"cartItems":updatedCartItems, "total": total}},{new: true})
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
router.post("/delete", (req, res) => {
    Cart
        .findOne({ $and: [ { sessionId: req.body.sessionId }, { status: 'inCart' } ] })
        .then(item => {
            if (item) {
                let updatedCartItems = item.cartItems;
                let inCommingProduct = req.body.cartItems.product;
                let index = updatedCartItems.findIndex(obj => {return obj.product.pid == inCommingProduct.pid && obj.product.source == inCommingProduct.source});
                if(index != -1){
                    updatedCartItems.splice(index,1);
                    let total = item.total - parseInt(req.body.cartItems.total);
                    item
                        .updateOne({$set: {"cartItems":updatedCartItems, "total": total}})
                        .then(cart =>res.json(cart))
                        .catch(err => console.log(err))
                }

            }
        })
        .catch(err => console.log(err));
})

router.post("/makeOrder", (req, res) => {
    Cart
        .findOne({ $and: [ { sessionId: req.body.sessionId }, { status: 'inCart' } ] })
        .then(item => {
            if (item) {
                item
                    .updateOne({$set: {"status":'makeOrder', "address": req.body.address}})
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
router.post("/getOrders", (req,res) => {
    Cart
        .find({ $and: [ { sessionId: req.body.sessionId }, { $or: [ { status:  'makeOrder'}, { status:  'deleverOrder'}, { status:  'deleveredOrder'} ] } ] })
        .then(cart => res.send(cart))
        .catch(err => console.log(err))
})
module.exports = router;