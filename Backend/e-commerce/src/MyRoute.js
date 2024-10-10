import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import Layouts from './components/Layouts'
import ProductDetails from './pages/ProductDetails'
import Product from './pages/Product'

const MyRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layouts />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/productdetails/:productId' element={<ProductDetails />} />
          <Route path='/products' element={<Product />} />

        </Route>

      </Routes>
    </Router>
  )
}

export default MyRoute