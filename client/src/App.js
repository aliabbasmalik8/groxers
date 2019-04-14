import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser } from "./actions/authActions";
import { logoutUser } from "./api/authApi"
import { Provider } from "react-redux";
import store from "./store";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import ProductIdex from "./components/products/ProductIndex"
import Cart from "./components/cart/Cart"
import CartList from "./components/cartList/CartList"
import Checkout from './components/checkout/Checkout'
import Orders from './components/orders/Orders'
import AdminDashboard from './components/admin/Dashboard'
import 'bootstrap/dist/css/bootstrap.css'
// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
        <Router>
          <div className="App">
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/products" component={ProductIdex} />
            <Route path="/products/:productCatagory/:subCatagory/:source" component={ProductIdex}  />
            <Route exact path="/cart/:source/:id" component={Cart} />
            <Switch>
              <PrivateRoute exact path="/checkout/address" component={Checkout} />
              <PrivateRoute exact path="/orders" component={Orders} />
              <PrivateRoute exact path="/cart" component={CartList} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/admin/dashboard" component={AdminDashboard} />
            </Switch>
          </div>
        </Router>
        </div>
      </Provider>
    );
  }
}
export default App;