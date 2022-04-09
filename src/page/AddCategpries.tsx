import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

type PropsAddCategpries = {
    onAddCT : (category :TypeCate) =>void
    name:string
}
type TypeCate ={
    name:string
}

const AddCategpries = (props: PropsAddCategpries) => {
    const { register, handleSubmit, formState: { errors }} = useForm<TypeCate>();
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<TypeCate> = data => {
        console.log(data)
        props.onAddCT(data); 
        navigate("/admin/categories")
        
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
        <input type="text" placeholder='Tên danh mục' {...register('name')} />
        <button>Thêm</button>
        </div>
        </form>
    </div>
  )
}
export default AddCategpries