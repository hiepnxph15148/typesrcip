import React from 'react'
import { Categories } from '../types/catrgories';
import { Link } from 'react-router-dom';

type PropsCategory = {
  category: Categories[];
  onRemoveCt: (id: number) => void
}

const Category = (props: PropsCategory) => {
  return (
    <div>
      <table className="table table-bordered">
        <tbody>
          {props.category.map((item, index) => {
            return <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td><Link to={`/admin/categories/${item._id}/edit`}>Edit</Link></td>
              <td><button onClick={() => props.onRemoveCt(item._id)}>Remove</button></td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}
export default Category