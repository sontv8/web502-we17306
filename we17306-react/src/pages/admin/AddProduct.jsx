import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddProductPage = (props) => {
    const navigate = useNavigate()
    const [inputValue, setInputValue] = useState()
    const onHandleChange = (e) => {
        // console.log(e.target.value);
        setInputValue({ name: e.target.value })
    }
    const onHandleSubmit = (e) => {
        e.preventDefault();
        // console.log(inputValue);
        props.onAdd(inputValue)
        navigate('/admin/products')
    }
    return (
        <div>
            <form action="" onSubmit={onHandleSubmit}>
                <input type="text" placeholder='Product Name' onChange={onHandleChange} />
                <button type="submit">Add New Product</button>
            </form>
        </div>
    )
}

export default AddProductPage