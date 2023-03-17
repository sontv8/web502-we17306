import { useState, useEffect } from "react"
const ProductsPage = (props) => {
    const [data, setData] = useState([])
    useEffect(() => {
        setData(props.products)
    }, [props])
    const removeProduct = (id) => {
        fetch('http://localhost:3000/products/' + id, {
            method: 'DELETE'
        }).then(() => setData(data.filter((item) => item.id !== id)))
    }
    return (
        <div>
            {
                data.map((item) => {
                    return <div key={item.id}>
                        <h3 >{item.name}</h3>
                        <button onClick={() => removeProduct(item.id)}>Remove</button>
                    </div>
                })
            }
        </div>
    )
}

export default ProductsPage