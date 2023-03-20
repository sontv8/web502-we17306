import { useState, useEffect } from "react"
const ProductsPage = (props) => {
    // console.log(props);
    // return
    const [data, setData] = useState([])
    useEffect(() => {
        setData(props.products)
    }, [props])
    const removeProduct = (id) => {
        props.onRemove(id)
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