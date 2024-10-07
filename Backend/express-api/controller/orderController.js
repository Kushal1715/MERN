const OrderItem = require('../models/orderItemModel')
const Order = require('../models/orderModel')

//post order
exports.postOrder = async (req, res) => {
  const orderItemIds = Promise.all(req.body.orderItems.map(async orderItem => {
    let newOrderItem = new OrderItem({
      quantity: orderItem.quantity,
      product: orderItem.product
    })
    newOrderItem = await newOrderItem.save()
    return newOrderItem._id
  }))

  const orderItemIdsResolved = await orderItemIds

  //calculating total price
  const totalAmount = await Promise.all(orderItemIdsResolved.map(async orderId => {
    const itemOrder = await OrderItem.findById(orderId).populate('product', 'product_price')
    const total = itemOrder.quantity * itemOrder.product.product_price
    return total
  }))
  //[400,500,2000]

  const totalPrice = totalAmount.reduce((a, b) => a + b, 0)

  //save data
  let order = new Order({
    orderItems: orderItemIdsResolved,
    shippingAddress1: req.body.shippingAddress1,
    shippingAddress2: req.body.shippingAddress2,
    city: req.body.city,
    zip: req.body.zip,
    phone: req.body.phone,
    country: req.body.country,
    TotalPrice: totalPrice,
    user: req.body.user

  })
  order = await order.save()
  if (!order) {
    return res.status(400).json({ error: 'something went wrong' })
  }
  res.send(order)
}

//order list
exports.orderList = async (req, res) => {
  const orderlist = await Order.find()
    .populate('user', 'name')
    .sort({ createdAt: -1 })// descending order

  if (!orderlist) {
    return res.status(400).json({ error: 'something went wrong' })
  }
  res.send(orderlist)
}

//order details
exports.orderDetails = async (req, res) => {
  const order = await Order.findById(req.params.id)
    .populate('user', 'name')
    .populate({
      path: 'orderItems', populate: {
        path: 'product', populate: 'category'
      }
    })

  if (!order) {
    return res.status(400).json({ error: 'something went wrong' })
  }
  res.send(order)
}

//update status
exports.updateStatus = async (req, res) => {
  const order = await Order.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  )
  if (!order) {
    return res.status(400).json({ error: 'something went wrong' })
  }
  res.send(order)
}

//specific user order list
exports.userOrders = async (req, res) => {
  const userOrderList = await Order.find({ user: req.params.userId })
    .populate({
      path: 'orderItems', populate: {
        path: 'product', populate: 'category'
      }
    })
    .sort({ createdAt: -1 })

  if (!userOrderList) {
    return res.status(400).json({ error: 'something went wrong' })
  }
  res.send(userOrderList)
}

//delete order 
exports.deleteOrder = (req, res) => {
  Order.findByIdAndDelete(req.params.id).then(async order => {
    if (order) {
      order.orderItems.map(async orderItem => {
        await OrderItem.findByIdAndDelete(orderItem);
      })
      return res.json({ msg: 'order deleted' })
    } else {
      return res.status(400).json({ error: 'failed to delete order' })
    }
  })
    .catch(err => {
      return res.status(400).json({ error: err })
    })

}