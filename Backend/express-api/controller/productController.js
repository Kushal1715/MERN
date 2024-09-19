//import the model
const Product = require('../models/productMode');

//to post products
exports.postProduct = async (req, res) => {
  let product = new Product({
    product_name: req.body.product_name,
    product_price: req.body.product_price,
    countInStock: req.body.countInStock,
    product_description: req.body.product_description,
    product_image: req.body.product_image,
    category: req.body.category
  })
  product = await product.save()
  if (!product) {
    return res.status(400).json({ error: 'something went wrong' })
  }
  res.send(product)
}

// to show all products
exports.productList = async (req, res) => {
  const product = await Product.find().populate('category')
  if (!product) {
    return res.status(400).json({ error: 'something went wrong' })
  }
  res.send(product)
}

//to fetch single product
exports.getProduct = async (req, res) => {
  const product = await Product.findById(req.params.id).populate('category')
  if (!product) {
    return res.status(400).json({ error: 'product not found' })
  }
  res.send(product);
}

//to update product
exports.updateProduct = async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, {
    product_name: req.body.product_name,
    product_price: req.body.product_price,
    countInStock: req.body.countInStock,
    product_description: req.body.product_description,
    product_image: req.body.product_image,
    category: req.body.category
  }, { new: true })
  if (!product) {
    return res.status(400).json({ error: 'failed to update product' })
  }
  res.send(product);
}

//to delete product
exports.deleteProduct = async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product) {
    return res.status(400).json({ error: 'Product not found' })
  }
  res.send(product)
}


