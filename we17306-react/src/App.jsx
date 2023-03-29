// import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/Products'
import React, { useEffect, useState } from 'react'
import ProductDetailPage from './pages/ProductDetail'
import { addProduct, deleteProduct, getAllProduct, updateProduct } from './api/product'
import Dashboard from './pages/admin/Dashboard'
import ProductManagementPage from './pages/admin/ProductManagement'
import AddProductPage from './pages/admin/AddProduct'
import UpdateProductPage from './pages/admin/UpdateProduct'
import WebsiteLayout from './pages/layouts/WebsiteLayout'
import AdminLayout from './pages/layouts/AdminLayout'

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
    addProduct(product).then(() => setProduct([...products, product]))
  }
  const onHandleUpdate = (product) => {
    updateProduct(product).then(() => setProduct(products.map((item) => item.id == product.id ? product : item)))
  }
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<WebsiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path='products' >
            <Route index element={<ProductsPage products={products} onRemove={onHandleRemove} />} />
            <Route path=':id' element={<ProductDetailPage />} />
          </Route>
        </Route>

        <Route path='/admin' element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='products' >
            <Route index element={<ProductManagementPage products={products} onRemove={onHandleRemove} />} />
            <Route path='add' element={<AddProductPage onAdd={onHandleAdd} />} />
            <Route path=':id/update' element={<UpdateProductPage onUpdate={onHandleUpdate} products={products} />} />
          </Route>
        </Route>

        {/* <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<ProductsPage products={products} onRemove={onHandleRemove} />} />
        <Route path='/products/:id' element={<ProductDetailPage />} />
        <Route path='/admin' element={<Dashboard />} />
        <Route path='/admin/products' element={<ProductManagementPage products={products} onRemove={onHandleRemove} />} />
        <Route path='/admin/products/add' element={<AddProductPage onAdd={onHandleAdd} />} />
        <Route path='/admin/products/:id/update' element={<UpdateProductPage onUpdate={onHandleUpdate} products={products} />} /> */}
      </Routes>
    </div>
  )
}

export default App
