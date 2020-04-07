const express = require('express');
const app = express();
const router = express.Router();

const UserController = require('../controller/UserController')

router.route('/user')
    .get(UserController.index)

module.exports = router;