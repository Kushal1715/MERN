import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Contact from './Pages/Contact'
import MainLayout from './layouts/MainLayout'
import ProductDetails from './components/products/ProductDetails'
import Cart from './components/Cart'

const MyRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/product-details/:productId' element={<ProductDetails />} />
            <Route path='/cart' element={<Cart />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default MyRoutes