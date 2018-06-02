const express = require('express');
const app = express();
const router = express.Router();
const Product = require('../model/product')

router.route('/product')
        .post((req, res) => {
            Product.insert(req.body, (err, result) =>{
                if(err)
                    res.send(err)
                res.json(result);
            })
        })
        .get((req, res)=>{
            Product.getAll((err, result) => {
                if(err)
                    res.send(err)
                res.json(result);
            })
        })

router.route('/product/:product_id')
        .get((req, res)=> {
                Product.get({'_id' : req.params.product_id}, (err, result) => {
                    if (!err) {
                        return res.json(result);
                    } else {
                        return res.send(err); // 500 error
                    }
                })
        })
        .put((req, res) => {
            Product.updates({'_id' : req.params.product_id}, req.body, (err, result) => {
                if(err)
                    res.send(err);
                res.json(result);
            })
        })
        .delete((req, res) => {
            Product.delete({'_id':req.params.product_id}, (err, result) => {
                if(err)
                    res.send(err);
                res.json({'messages' : 'Data have been deleted'});
            })
        })

module.exports = router;