import axios from "axios";
import { getProductsAction, addCartAction, getCartItemsAction } from './../actions/productAction'

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
      dispatch(addCartAction(cart))
    })
};
export const getCartItems = data => dispatch =>{
  axios
    .post("/api/cart/getCartItems", data)
    .then(res =>{
      dispatch(getCartItemsAction(res.data))
    })
};