const express = require('express');
const { postUser, postEmailConfiguration } = require('../controller/authController');
const router = express.Router();

router.post('/signup', postUser)
router.put('/confirmation/:token', postEmailConfiguration)

module.exports = router;