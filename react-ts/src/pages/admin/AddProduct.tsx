import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { IProduct } from '../../types/product'
interface IFormInput {
    name: string,
    price: number
}
interface IProps {
    onAdd: (product: IProduct) => void
}
const AddProductPage = (props: IProps) => {
    const { register, handleSubmit } = useForm()
    const onHandleSubmit: SubmitHandler<IFormInput> = (data: IProduct) => {
        props.onAdd(data);
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
                <input type="text" {...register("name")} />
                <input type="number" {...register("price")} />
                <button type="submit">Add New Product</button>
            </form>
        </div>
    )
}

export default AddProductPage