var express = require('express');
const { signUp } = require('../controllers/UserController');
var router = express.Router();

router.post('/signup',signUp)

module.exports = router;