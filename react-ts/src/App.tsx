import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { deleteProduct, getAllProduct } from './api/product'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/Product'
import { IProduct } from './types/product'

function App() {
  const [products, setProduct] = useState([])
  useEffect(() => {
    getAllProduct().then(({ data }) => setProduct(data))
  }, [])
  const onHandleRemove = (id: number) => {
    deleteProduct(id).then(() => setProduct(products.filter((item: IProduct) => item.id !== id)))
  }
  return (
    <div className="App">
      <Routes>
        <Route path='/'>
          <Route index element={<HomePage />} />
          <Route path='products' element={<ProductsPage products={products} onRemove={onHandleRemove} />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
