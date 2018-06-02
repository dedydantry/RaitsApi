const express = require('express');
const app = express();

let product = require('./product');

module.exports = {
    product : product
}