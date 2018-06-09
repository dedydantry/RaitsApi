const express = require('express');
const app = express();
const router = express.Router();

const UserController = require('../controller/UserController')


router.route('/user')
    .get(UserController.index)
    .post(UserController.add)

router.route('/user/:user_id')
    .get(UserController.tokens)

module.exports = router;