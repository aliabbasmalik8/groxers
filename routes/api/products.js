const express = require("express");
const router = express.Router();
const Product = require("../../models/Product");
router.post("/add", (req, res) => {
    const product = new Product({
        name: req.body.name,
        pid: req.body.pid,
        description: req.body.description,
        category: req.body.category,
        images: req.body.images,
        brand: req.body.brand,
        attributes: req.body.attributes,
        skus: req.body.skus,
        p_type: req.body.p_type,
        source: req.body.source,
        url: req.body.url,
    });
    product
        .save()
        .then(product => res.json(product))
        .catch(err => console.log(err));
})
router.post("/update", (req, res) => {
    let query = {$and: [ {pid: req.body.pid}, {source: req.body.source}]}
    Product
        .findOneAndUpdate(query, req.body, {upsert:true})
        .then(product => res.json(product))
        .catch(err => console.log(err))
})
router.get("/getAll", (req, res) =>{
    Product
        .find()
        .limit(100)
        .then(products => res.send(products))
        .catch(err => console.log(err))
})
module.exports = router;