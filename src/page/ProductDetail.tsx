import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { read } from '../api/product';
import { useForm, SubmitHandler } from 'react-hook-form'
import { IProduct } from '../types/product';
type Props = {
  onAddCart : (productCR: TypeForm) => void
}
type TypeForm = {
  quantiny: number
}

const ProductDetail = (props: Props) => {
  const { id } = useParams();
  const [product, setProduct] = useState<IProduct>();
  const { register, handleSubmit, formState: { errors } } = useForm<TypeForm>()
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await read(id);
      setProduct(data)
    }
    getProduct();
  }, [id])

  const onSubmit: SubmitHandler<TypeForm> = data => {
    try {
      const newObject = {
        ...data,
        name:product?.name,     
        price: product?.price,
      };
      props.onAddCart(newObject)
     } catch (error) {
      console.log(error)
     }
   }
  

  return (
    <div className=' m-auto '>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://res.cloudinary.com/fptpolytechnic/image/upload/v1644757361/banner2_j8syqq.jpg" className="d-block w-100" alt="..."></img>
          </div>
          <div className="carousel-item">
            <img src="https://res.cloudinary.com/fptpolytechnic/image/upload/v1644757361/banner2_j8syqq.jpg" className="d-block w-100" alt="..."></img>
          </div>
          <div className="carousel-item">
            <img src="https://res.cloudinary.com/fptpolytechnic/image/upload/v1644757361/banner2_j8syqq.jpg" className="d-block w-100" alt="..."></img>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className='max-w-7xl py-4 m-auto'>
      <div className="flex font-sans ">
        <div className="flex-none w-56 relative">
          <img src="https://demo.cmssuperheroes.com/themeforest/cafenod/wp-content/uploads/2021/03/coffee-3.jpg" alt="" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
        </div>
        <form className="flex-auto p-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-wrap">
            <h1 className="flex-auto font-medium text-slate-900">
              {product?.name}
            </h1>
            <div className="w-full flex-none mt-2 order-1 text-3xl font-bold text-violet-600">
              {product?.price}
            </div>
            <div className="text-sm font-medium text-slate-400">
              In stock
            </div>
          </div>
          <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
            <div className="space-x-2 flex text-sm font-bold">
              <label>
                <input className="sr-only peer" name="size" type="radio" value="xs" checked />
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white">
                  XS
                </div>
              </label>
              <label>
                <input className="sr-only peer" name="size" type="radio" value="s" />
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white">
                  S
                </div>
              </label>
              <label>
                <input className="sr-only peer" name="size" type="radio" value="m" />
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white">
                  M
                </div>
              </label>
              <label>
                <input className="sr-only peer" name="size" type="radio" value="l" />
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white">
                  L
                </div>
              </label>
              <label>
                <input className="sr-only peer" name="size" type="radio" value="xl" />
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white">
                  XL
                </div>
              </label>
            </div>
          </div>
          <div className="flex space-x-4 mb-5 text-sm font-medium">
            <div className="flex-auto flex space-x-4">
              <button className="h-10 px-6 font-semibold rounded-full bg-[#c7a17a] hover:bg-black text-white" type="submit">
                Thêm vào giỏ hàng
              </button>
            </div>
            <button className="flex-none flex items-center justify-center w-9 h-9 rounded-full text-violet-600 bg-violet-50" type="button" aria-label="Like">
              <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
              </svg>
            </button>
          </div>
          <p className="text-sm text-slate-500">
            Free shipping on all continental US orders.
          </p>
        </form>
      </div>
      </div>
    </div>

  )
}

export default ProductDetail