import {
    GET_PRODUCTS,
    ADD_PRODUCTS,
    ADD_CART,
    GET_CART_ITEMS,
  } from "./types";
  
export function getProductsAction(payload){
  return {
      type: GET_PRODUCTS,
      payload,
  }
};
export function addProductsAction(payload){
  return {
      type: ADD_PRODUCTS,
      payload,
  }
};
export function addCartAction(payload){
  return {
      type: ADD_CART,
      payload,
  }
};
export function getCartItemsAction(payload){
  return {
      type: GET_CART_ITEMS,
      payload,
  }
};