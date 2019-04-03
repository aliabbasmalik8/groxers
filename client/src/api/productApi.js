import axios from "axios";
import { getProductsAction, addCartAction } from './../actions/productAction'

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
export const addIntoCart = cart => dispatch =>{
  axios
    .post("/api/cart/add", cart)
    .then(res =>{
      dispatch(addCartAction(res.data))
    })
};