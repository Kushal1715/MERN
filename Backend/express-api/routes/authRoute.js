const express = require('express');
const { postUser, postEmailConfiguration, signIn, forgetPassword, resetPassword, userList, userDetails, requireAdmin } = require('../controller/authController');
const { userValidation, validation, passwordValidation } = require('../validation/validator');
const router = express.Router();

router.post('/signup', userValidation, validation, postUser)
router.put('/confirmation/:token', postEmailConfiguration)
router.post('/signin', signIn)
router.put('/forget/password', forgetPassword)
router.put('/reset/password/:token', passwordValidation, validation, resetPassword)
router.get('/user/list', requireAdmin, userList)
router.get('/user/details/:id', userDetails)
module.exports = router;