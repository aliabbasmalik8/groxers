import axios from "axios";
import { getProductsAction } from './../actions/productAction'
import {
  GET_ERRORS,
} from "./../actions/types";

export function getProducts(dispatch){
  axios
    .get("/api/products/getAll")
    .then(res =>{
        dispatch(getProductsAction(res.data))
    })
};
export function addProducts(product){
  debugger;
  axios
    .post("/api/products/add", product)
    .then(res =>{
        debugger;
    })
};