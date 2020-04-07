var exports = module.exports = {}
const User = require('../model/user')
const jwt = require('jsonwebtoken');

exports.index = async(req, res)=>{
    res.send('Welcome page')
}