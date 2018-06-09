const express = require('express');
const app = express();

let product = require('./product');
let user = require('./user');

module.exports = {
    product : product,
    user : user
}