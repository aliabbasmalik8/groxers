import {
    GET_PRODUCTS,
    ADD_PRODUCTS,
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