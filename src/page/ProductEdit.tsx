import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useParams, useNavigate } from 'react-router-dom'
import { read } from '../api/product'

type ProductEditProps = {
    name: string,
    price: number,
    onPut: (prodcut: FormInput) => void
};

type FormInput = {
    name: string,
    price: number
}

const ProductEdit = (props: ProductEditProps) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInput>();
    const navigate = useNavigate();
    const { id } = useParams();

    const onSubmit: SubmitHandler<FormInput> = data => {
        props.onPut(data)
        navigate('/admin/products')
    }
    useEffect(() => {
        const getProduct = async () => {
            const { data } = await read(id);
            reset(data);
        }
        getProduct()
    }, [])
    return (
        <form action="" className='m-auto' onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
            <label  className="form-label">Name</label>
            <input  className='form-control' type="text" {...register('name', { required: true })} />
            <input className='form-control' type="text" {...register('price')} />
            </div>
            <button className='rounded-lg bg-[#c7a17a] p-3 hover:bg-black text-white'>Update</button>
        </form>
    )
}

export default ProductEdit