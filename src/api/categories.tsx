import { Categories } from "../types/catrgories";
import instance from "./instance";

export const getall = () =>{
    const url = '/categories'
    return instance.get(url)
}
export const get = (_id:string | undefined) =>{
    const url = `/categories/${_id}`
    return instance.get(url)
}
export const read = (slug : string|undefined) => {
    const url = `/categories/${slug}`
    return instance.get(url)
}

export const addct = (category: Categories) => {
    const url = '/categories'
    return instance.post(url, category)
}
export const updatect = (category: Categories) => {
    const url = `/categories/${category._id}/edit`
    return instance.put(url, category)
}
export const removect = (_id:number) => {
    const url = `/categories/${_id}`
    return instance.delete(url)
}