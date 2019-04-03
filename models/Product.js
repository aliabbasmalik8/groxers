const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    pid: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    images: [],
    brand: {
        type: String,
    },
    attributes: {
        type: Object,
    },
    category:[],
    skus: [],
    p_type: '',
    source: '',
    url: '',    
});
module.exports = Product = mongoose.model("products", ProductSchema);