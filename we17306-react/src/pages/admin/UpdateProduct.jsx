import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const UpdateProductPage = (props) => {
    const navigate = useNavigate() //khởi tạo navigate dùng để chuyển trang
    const { id } = useParams() //lấy ra id từ url
    const [product, setProduct] = useState({}) //khởi tạo state để set giá trị cho product
    const [inputValue, setInputValue] = useState({}) //khởi tạo state để set giá trị cho inputValue
    useEffect(() => { //chạy khi component được render
        const currentProduct = props.products.find((item) => item.id == id) //tìm product hiện tại có id trùng với id trên url và gán cho 
        setProduct(currentProduct) //gán lại giá trị cho product
    })
    const onHandleChange = (e) => { //hàm xử lý khi input thay đổi
        const { name, value } = e.target //lấy ra name và value của input (destructuring)
        setInputValue({ ...inputValue, [name]: value }) //gán giá trị cho state
    }
    const onHandleSubmit = (e) => { //hàm xử lý khi submit form
        e.preventDefault();
        props.onUpdate({ ...product, ...inputValue }) //gọi hàm onUpdate từ props
        navigate('/admin/products') //chuyển về trang /admin/products
    }
    return (
        <div>
            <form action="" onSubmit={onHandleSubmit}>
                <input type="text" placeholder='Product Name' onChange={onHandleChange} name='name' defaultValue={product?.name} />
                <input type="number" onChange={onHandleChange} name='price' defaultValue={product?.price} />
                <button type="submit">Add New Product</button>
            </form>
        </div >
    )
}

export default UpdateProductPage