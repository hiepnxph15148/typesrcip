import React from 'react'
import { Link } from 'react-router-dom';
import { IProduct } from '../types/product'

type ProductManagerProps = {
  products: IProduct[];
  onRemove: (id: number) => void
}

const ProductManager = (props: ProductManagerProps) => {
  return (
    <div>
      <table className="table table-bordered">
        <tbody>
          {props.products.map((item, index) => {
            return <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td><Link to={`/admin/products/${item._id}/edit`}>Edit</Link></td>
              <td><button onClick={() => props.onRemove(item._id)}>Remove</button></td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ProductManager