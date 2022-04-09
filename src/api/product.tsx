import { IProduct } from "../types/product";
import instance from "./instance";
import { isAuthenticate } from "../utils/localStorage";
const { token, user } = isAuthenticate();

export const list = () => {
    const url = "/products";
    return instance.get(url);
}
export const remove = (_id: number) => {
    const url = `/products/${_id}`;
    return instance.delete(url);
}
export const read = (_id: string | undefined) => {
    const url = `/products/${_id}`;
    return instance.get(url);
}
export const add = (product: IProduct) => {
    const url = `/products`;
    return instance.post(url, product)
}
export const update = (product: IProduct) => {
    const url = `/products/${product._id}`;
    return instance.put(url, product);
}