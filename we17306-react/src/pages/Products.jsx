
const ProductsPage = (props) => {
    return (
        <div>
            {
                props.products.map((item) => {
                    return <h3 key={item.id}>{item.name}</h3>
                })
            }
        </div>
    )
}

export default ProductsPage