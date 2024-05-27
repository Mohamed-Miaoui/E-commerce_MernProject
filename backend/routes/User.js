var express = require('express');
const { signUp, login } = require('../controllers/UserController');
var router = express.Router();

router.post('/signup',signUp)
router.post('/login',login)

module.exports = router;