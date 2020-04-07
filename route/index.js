const express = require('express');

let welcome = require('./welcome')
let product = require('./product');
let user = require('./user');

module.exports = {
    welcome:welcome,
    product:product,
    user:user
}