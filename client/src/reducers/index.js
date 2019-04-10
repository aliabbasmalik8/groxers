import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
import productsReducer from "./productsReducer";
import adminReducer from "./adminReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  items: productsReducer,
  admin: adminReducer,
});