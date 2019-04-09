import axios from "axios";
import { getProductsAction, addCartAction, getCartItemsAction, removeCartItemAction, makeOrderAction, getOrdersAction } from './../actions/productAction'

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
export const removeCartItem = cart => dispatch =>{
  axios
    .post("/api/cart/delete", cart)
    .then(res =>{
      dispatch(removeCartItemAction(cart))
    })
};
export const getCartItems = data => dispatch =>{
  axios
    .post("/api/cart/getCartItems", data)
    .then(res =>{
      dispatch(getCartItemsAction(res.data))
    })
};
export const makeOrder = data => dispatch =>{
  axios
    .post("/api/cart/makeOrder", data)
    .then(res =>{
      dispatch(makeOrderAction(data))
    })
};
export const getOrders = data => dispatch =>{
  axios
    .post("/api/cart/getOrders", data)
    .then(res =>{
      dispatch(getOrdersAction(res.data))
    })
};