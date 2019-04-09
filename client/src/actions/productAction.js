import {
    GET_PRODUCTS,
    ADD_PRODUCTS,
    ADD_CART,
    GET_CART_ITEMS,
    REMOVE_CART_ITEM,
    MAKE_ORDER,
    GET_ORDERS
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
export function removeCartItemAction(payload){
  return {
      type: REMOVE_CART_ITEM,
      payload,
  }
};
export function getCartItemsAction(payload){
  return {
      type: GET_CART_ITEMS,
      payload,
  }
};
export function makeOrderAction(payload){
  return {
      type: MAKE_ORDER,
      payload,
  }
};
export function getOrdersAction(payload){
  return {
      type: GET_ORDERS,
      payload,
  }
};