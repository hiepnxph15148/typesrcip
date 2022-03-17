import instance from "./instance";

export const list = () => {
    const url = "/products";
    return instance.get(url);
}
export const read = (id: string  | undefined) =>{
    const url = `/product/${id}`;
    return instance.get(url);
}