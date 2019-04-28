const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const CartSchema = new Schema({
  sessionId: {
    type: String,
    required: true
  },
  cartItems:[],
  status:{
    type: String,
    required: true
  },
  total:{
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt:{
    type: Date,
    default: Date.now
  },
  orderTime:{
    type: Date,
    default: Date.now,
  },
  deliverTime:{
    type: Date,
    default: Date.now,
  },
  reachTime:{
    type: Date,
    default: Date.now,
  },
  address:{type: Object},
  distance: Number,
  charges: Number
});
module.exports = Cart = mongoose.model("carts", CartSchema);