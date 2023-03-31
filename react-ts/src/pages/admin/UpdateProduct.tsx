import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

const UpdateProductPage = (props) => {
    const { register, handleSubmit, reset } = useForm()
    // khởi tạo hàm registern handleSubmit, reset từ useForm
    //register dùng để đăng ký các input
    // handleSubmit dùng để xử lý khi submit form
    // reset dùng để reset lại giá trị trong form
    const { id } = useParams() // lấy id từ url
    useEffect(() => {
        const currentProduct = props.products.find((item) => item.id === Number(id)) // tìm product có id trùng với id trong url
        reset(currentProduct) // reset lại giá trị trong form
    }, [props])
    const onHandleSubmit = data => { // hàm xử lý khi submit form
        props.onUpdate(data);// gọi hàm onUpdate từ props truyền vào
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
                <input type="text" {...register('name')} />
                <input type="number" {...register('price')} />
                <button type="submit">Update Product</button>
            </form>
        </div>
    )
}

export default UpdateProductPage