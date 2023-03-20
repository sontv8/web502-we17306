import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetailPage = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    useEffect(() => {
        fetch('http://localhost:3000/products/' + id)
            .then((response) => response.json())
            .then(data => setProduct(data))
    })
    return (
        <div>
            <h1>Product Detail Page</h1>
            <h2>{product.name}</h2>
        </div>
    )
}

export default ProductDetailPage