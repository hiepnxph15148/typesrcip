import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getall, read } from '../api/categories';
import { Categories } from '../types/catrgories';
import { IProduct } from '../types/product';

type Props = {}

const DetaillCategory = (props: Props) => {
    const { slug } = useParams();
    const [categories, setcategories] = useState<Categories>();
    const [product,setProduct] = useState<IProduct>();
    
    useEffect (() =>{

        const GetCategory = async () =>{
            const {data} = await getall()
            setcategories(data)
        }
        GetCategory()

    },[slug])

    useEffect (() =>{
        const DetaillCategory = async () =>{
            const {data} = await read(slug)
            setcategories(data)
        }
        DetaillCategory()
        
    },[slug])
  return (
    <div>
        
    </div>
  )
}

export default DetaillCategory