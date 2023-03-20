// import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/Products'
import React, { useEffect, useState } from 'react'
import ProductDetailPage from './pages/ProductDetail'
import { deleteProduct, getAllProduct } from './api/product'

function App() {
  const [products, setProduct] = useState([])
  useEffect(() => {
    // fetch('http://localhost:3000/products')
    //   .then((response) => response.json())
    //   .then(data => setProduct(data))
    getAllProduct().then(({ data }) => setProduct(data))
  }, [])
  const onHandleRemove = (id) => {
    deleteProduct(id).then(() => setProduct(products.filter((item) => item.id !== id)))
  }
  const onHandleAdd = (product) => {
    setProduct([...products, product])
  }
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<ProductsPage products={products} onRemove={onHandleRemove} />} />
        <Route path='/products/:id' element={<ProductDetailPage />} />
      </Routes>
    </div>
  )
}

export default App
