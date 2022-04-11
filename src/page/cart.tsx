import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { deleteCart } from '../api/cart'
import { read } from '../api/product'
import {TypeCart} from '../types/cart'

type Props = {}

const Cart = (props: Props) => {
    const[carts,setCart] = useState<TypeCart[]>([])
    const {id} = useParams()
    useEffect(()=>{
        const getCart = async () => {
          const {data} = await read(id)
          setCart(data)
        }
        getCart()
      },[])
      const onRemoveCR = async (id: number) => {
        const confirm = window.confirm("Bạn có muốn xóa sản phẩm này khỏi giỏ hàng")
        if (confirm) {
          deleteCart(id)
          setCart(carts.filter(item => item._id !== id))
        }
      }
      
  return (
    <div>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
  {carts.map(() =>{
    return  <><tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr><tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr><tr>
        <th scope="row">3</th>
        <td>Larry the Bird</td>
        <td>@twitter</td>
      </tr></>
  })}
  </tbody>
</table>
    </div>
  )
}

export default Cart