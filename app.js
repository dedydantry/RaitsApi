const express = require('express');
const http = require('http');
const app = express();
const bodyParser = require("body-parser");
const logger = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
const midlewareJwt = require('./middleware/Jwt')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const server = http.createServer(app);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use(midlewareJwt.secret)
// app.use(midlewareJwt.validateToken)

server.listen(3000);
// const DB = require('./config/database');

let route = require('./route/index');
app.use(route.welcome);
app.use(route.user);
module.exports = app;