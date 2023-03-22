import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddProductPage = (props) => {
    const navigate = useNavigate() //khởi tạo navigate dùng để chuyển trang
    const [inputValue, setInputValue] = useState() //khởi tạo state
    const onHandleChange = (e) => {
        // console.log(e.target.value);
        // setInputValue({ name: e.target.value })
        // const name = e.target.name //lấy ra name của input
        // const value = e.target.value //lấy ra value của input
        const { name, value } = e.target //lấy ra name và value của input (destructuring)
        setInputValue({ ...inputValue, [name]: value }); //gán giá trị cho state
    }
    const onHandleSubmit = (e) => {
        e.preventDefault();
        // console.log(inputValue);
        props.onAdd(inputValue) //gọi hàm onAdd từ props
        navigate('/admin/products') //chuyển về trang /admin/products
    }
    return (
        <div>
            <form action="" onSubmit={onHandleSubmit}>
                <input type="text" placeholder='Product Name' onChange={onHandleChange} name='name' />
                <input type="number" onChange={onHandleChange} name='price' />
                <button type="submit">Add New Product</button>
            </form>
        </div>
    )
}

export default AddProductPage