// import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/Products'
import React, { useEffect, useState } from 'react'
import ProductDetailPage from './pages/ProductDetail'
import { getAllProduct } from './api/product'
import axios from 'axios'


function App() {
  const [products, setProduct] = useState([])
  useEffect(() => {
    // fetch('http://localhost:3000/products')
    //   .then((response) => response.json())
    //   .then(data => setProduct(data))
    getAllProduct().then(({ data }) => setProduct(data))
  }, [])
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<ProductsPage products={products} />} />
        <Route path='/products/:id' element={<ProductDetailPage />} />
      </Routes>
    </div>
  )
}

export default App
