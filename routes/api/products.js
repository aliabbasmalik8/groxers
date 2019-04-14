const express = require("express");
const router = express.Router();
const Product = require("../../models/Product");
var titleCase = require('title-case');
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
        .then(products => res.send(products))
        .catch(err => console.log(err))
})

router.post("/catagory", (req, res) =>{
    let tags = [];
    let flag = true;
    if(req.body.catagory !== "all"){
        tags.push(req.body.catagory)
    }
    if(req.body.subcatagory !== "all"){
        tags.push(titleCase(req.body.subcatagory))
    }
    if(req.body.subcatagory === "all" && req.body.catagory === "all"){
        flag = false;
    }
    if(flag){
        if(req.body.source === "all"){
            Product
                .find({ "category": { "$all": tags }})
                .skip(req.body.offset*40)
                .limit(40)
                .then(products => res.send(products))
                .catch(err => console.log(err))
        }else{
            Product
                .find({ "category": { "$all": tags } }, { "source": req.body.source})
                .skip(req.body.offset*40)
                .limit(40)
                .then(products => res.send(products))
                .catch(err => console.log(err))
        }
    }else{
        if(req.body.source === "all"){
            Product
                .find()
                .skip(req.body.offset*40)
                .limit(40)
                .then(products => res.send(products))
                .catch(err => console.log(err))
        }else{
            Product
                .find({ "source": req.body.source})
                .skip(req.body.offset*40)
                .limit(40)
                .then(products => res.send(products))
                .catch(err => console.log(err))
        }
    }
})
module.exports = router;