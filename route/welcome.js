const express = require('express');
const app = express();
const router = express.Router();

const WelcomeController = require('../controller/WelcomeController.js')

router.route('/')
    .get(WelcomeController.index)

module.exports = router;
