import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
import productsReducer from "./productsReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  products: productsReducer
});