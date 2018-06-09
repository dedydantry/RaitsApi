const express = require('express');
const app = express();
const router = express.Router();
const ProductControler = require('../controller/ProductController')

router.route('/product')
        .post(ProductControler.add)
        .get(ProductControler.index)

router.route('/product/:product_id')
        .get(ProductControler.getOne)
        .put(ProductControler.updates)
        .delete(ProductControler.destroy)

module.exports = router;