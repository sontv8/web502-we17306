import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { addProduct, deleteProduct, getAllProduct, updateProduct } from './api/product'
import AddProductPage from './pages/admin/AddProduct'
import UpdateProductPage from './pages/admin/UpdateProduct'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/Product'
import ProductDetailPage from './pages/ProductDetail'
import { IProduct } from './types/product'

function App() {
  const [products, setProduct] = useState([])
  useEffect(() => {
    getAllProduct().then(({ data }) => setProduct(data))
  }, [])
  const onHandleRemove = (id: number) => {
    deleteProduct(id).then(() => setProduct(products.filter((item: IProduct) => item.id !== id)))
  }
  const onHandleAdd = (product) => {
    addProduct(product)
  }
  const onHandleUpdate = (product) => {
    updateProduct(product)
  }
  return (
    <div className="App">
      <Routes>
        <Route path='/'>
          <Route index element={<HomePage />} />
          <Route path='products'  >
            <Route index element={<ProductsPage products={products} onRemove={onHandleRemove} />} />
            <Route path=':id' element={<ProductDetailPage products={products} />} />
          </Route>

        </Route>
        <Route path='/admin'>
          <Route path='products'>
            <Route path='add' element={<AddProductPage onAdd={onHandleAdd} />} />
            <Route path=':id/update' element={<UpdateProductPage onUpdate={onHandleUpdate} products={products} />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
