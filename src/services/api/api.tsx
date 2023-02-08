import axios from "axios";
import Product from "../../interface/product";


export const api = axios.create({
  baseURL: "https://dummyjson.com"
});

// Listagem de produtos
export const product = async (setProduct: any) => {
  const res = await api.get('/products?limit=12')
  setProduct(res.data.products)
}

// Produto selecionado pelo id
export const productSpecifications = async (setProducts: any, id: any) => {
  const res = await api.get<Product>(`/products/${id}`)
  setProducts(res.data)
}

// editar produto

