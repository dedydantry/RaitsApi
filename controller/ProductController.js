var exports = module.exports = {}
const Product = require('../model/product')


exports.index = async(req, res) => {
    Product.getAll((err, result) => {
        if(err)
            res.send(err)
        res.json(result);
    })
}

exports.add = async(req, res) => {
    Product.insert(req.body, (err, result) =>{
        if(err)
            res.send(err)
        res.json(result);
    })
}

exports.getOne = async(req, res) => {
    Product.get({'_id' : req.params.product_id}, (err, result) => {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    })
}

exports.updates = async (req, res) => {
    Product.updates({'_id' : req.params.product_id}, req.body, (err, result) => {
        if(err)
            res.send(err);
        res.json(result);
    })
}

exports.destroy = async(req, res) => {
    Product.delete({'_id':req.params.product_id}, (err, result) => {
        if(err)
            res.send(err);
        res.json({'messages' : 'Data have been deleted'});
    })
}