import axios from "axios";
import { getProductsAction, addCartAction, getCartItemsAction, removeCartItemAction, makeOrderAction, getOrdersAction,
       getAllOrdersAction, deliverOrderAction, getAdminAllDeliverOrdersAction, getAdminAllCompletedOrdersAction, completeOrderAction,
       deleteOrderAction } from './../actions/productAction'
import { getAllUsersAction } from './../actions/adminAction'

export const getProducts = userData => dispatch =>{
  axios
    .get("/api/products/getAll")
    .then(res =>{
        dispatch(getProductsAction(res.data))
    })
};
export const getProductsWithCatagory = data => dispatch =>{
  axios
    .post("/api/products/catagory", data)
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
      dispatch(makeOrderAction(res.data))
    })
};
export const deliverOrder = (data, order) => dispatch =>{
  axios
    .post("/api/cart/deliverOrder", data)
    .then(res =>{
      dispatch(deliverOrderAction(order))
    })
};
export const completeOrder = (data) => dispatch =>{
  axios
    .post("/api/cart/completeOrder", data)
    .then(res =>{
      dispatch(completeOrderAction(res.data))
    })
};
export const deleteOrder = (data, order) => dispatch =>{
  axios
    .post("/api/cart/deleteOrder", data)
    .then(res =>{
      dispatch(deleteOrderAction(order))
    })
};
export const getOrders = data => dispatch =>{
  axios
    .post("/api/cart/getOrders", data)
    .then(res =>{
      dispatch(getOrdersAction(res.data))
    })
};
export const getAllOrders = () => dispatch =>{
  axios
    .get("/api/cart/pendingOrders")
    .then(res =>{
      dispatch(getAllOrdersAction(res.data))
    })
};
export const getAdminAllDeliverOrders = () => dispatch =>{
  axios
    .get("/api/cart/deliverOrders")
    .then(res =>{
      dispatch(getAdminAllDeliverOrdersAction(res.data))
    })
};
export const getAdminAllCompletedOrders = () => dispatch =>{
  axios
    .get("/api/cart/completedOrders")
    .then(res =>{
      dispatch(getAdminAllCompletedOrdersAction(res.data))
    })
};
export const getAllUsers= (data) => dispatch =>{
  axios
    .get("/api/users/get", data)
    .then(res =>{
      dispatch(getAllUsersAction(res.data))
    })
};