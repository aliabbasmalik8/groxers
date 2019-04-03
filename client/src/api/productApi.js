import axios from "axios";
import { getProductsAction } from './../actions/productAction'

export const getProducts = userData => dispatch =>{
  axios
    .get("/api/products/getAll")
    .then(res =>{
        dispatch(getProductsAction(res.data))
    })
};
export function addProducts(product){
  axios
    .post("/api/products/add", product)
    .then(res =>{
    })
};