import { TypeCart } from "../types/cart"
import instance from "./instance"

export const read = (id:string | undefined) => {
    const url = `/carts/${id}`
    return instance.get(url)
}
export const addCard = (productCR:TypeCart) => {
    const url = `/carts`
    return instance.post(url, productCR)
}
export const deleteCart = (id:number) =>{
    const url = `/carts/${id}`
    return instance.delete(url)
}