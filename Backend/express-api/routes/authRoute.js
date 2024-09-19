const express = require('express');
const { postUser } = require('../controller/authController');
const router = express.Router();

router.post('/signup', postUser)

module.exports = router;