const express = require('express');
const { postProduct, productList, getProduct, updateProduct, deleteProduct } = require('../controller/productController');
const router = express.Router();

router.post('/postproduct', postProduct)
router.get('/productlist', productList)
router.get('/getproduct/:id', getProduct)
router.put('/updateproduct/:id', updateProduct)
router.delete('/deleteproduct/:id', deleteProduct)

module.exports = router
