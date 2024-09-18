const express = require('express')
const { testFunction } = require('../controller/testController')
const router = express.Router()

router.get('/demo', testFunction)
// no parameter if function is inside another function

module.exports = router;
//default method