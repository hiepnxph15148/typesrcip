import React, { useEffect, useState } from 'react'
import {useForm,SubmitHandler} from 'react-hook-form'
import {useNavigate, useParams} from 'react-router-dom'
import { get, getall } from '../api/categories'
import {Categories} from '../types/catrgories'

type PropsEditCategory = {
    onUpdatect : (editcategory: Form) =>void
}
type Form = {
    name:string,
    image:string,
}

const EditCategory = (props: PropsEditCategory) => {
    const {register, handleSubmit, formState: {errors}, reset} = useForm<Form>()
    const navigate = useNavigate()
    const {id} = useParams()
    useEffect(()=>{
        const getOne = async () => {
            const {data} = await get(id)
            reset(data)
        }
        getOne()
    },[])
    const onSubmit : SubmitHandler<Form> = data => {
        props.onUpdatect(data)
        navigate('/admin/categories')
        console.log(data)
    }
  return (
    <div>
        <form className='m-auto ' onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label  className="form-label">Name Category:</label>
                <input type="text" className='form-control' {...register('name')} />
            </div>
            <button  className='rounded-lg bg-[#c7a17a] p-3 hover:bg-black text-white'>Uplate Category</button>
        </form>
    </div>
  )
}

export default EditCategory