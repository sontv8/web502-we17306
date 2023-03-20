import instance from "./instance";

const getAllProduct = () => {
    return instance.get('/products');
}
const getOneProduct = (id) => {
    return instance.get('/products/' + id);
}
const addProduct = () => {
    return instance.post('/products');
}
const deleteProduct = (id) => {
    return instance.delete('/products/' + id);
}
const updateProduct = (product) => {
    return instance.put('/products/' + product.id, product);
}

export { getAllProduct, getOneProduct, addProduct, deleteProduct, updateProduct }