const express = require('express');
const http = require('http');
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const server = http.createServer(app);

server.listen(3000);
const DB = require('./config/database');

let route = require('./route/index');
app.use(route.product);
module.exports = app;