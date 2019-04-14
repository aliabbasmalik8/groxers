import {
    GET_PRODUCTS,
    ADD_PRODUCTS,
    ADD_CART,
    GET_CART_ITEMS,
    REMOVE_CART_ITEM,
    MAKE_ORDER,
    DELIVER_ORDER,
    GET_ORDERS,
    GET_ALL_ORDERS,
    ADMIN_DELIVER_ORDERS,
    ADMIN_COMPLETED_ORDERS,
    COMPLETE_ORDER,
    DELETE_ORDER
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
export function deliverOrderAction(payload){
  return {
    type: DELIVER_ORDER,
    payload,
  }
}
export function completeOrderAction(payload){
  return {
    type: COMPLETE_ORDER,
    payload,
  }
}
export function deleteOrderAction(payload){
  return {
    type: DELETE_ORDER,
    payload,
  }
}
export function getOrdersAction(payload){
  return {
      type: GET_ORDERS,
      payload,
  }
};
export function getAllOrdersAction(payload){
  return {
      type: GET_ALL_ORDERS,
      payload,
  }
};
export function getAdminAllDeliverOrdersAction(payload){
  return {
      type: ADMIN_DELIVER_ORDERS,
      payload,
  }
};
export function getAdminAllCompletedOrdersAction(payload){
  return {
      type: ADMIN_COMPLETED_ORDERS,
      payload,
  }
};