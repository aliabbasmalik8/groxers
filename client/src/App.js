import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {geolocated} from 'react-geolocated';
import geolib from 'geolib'
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser } from "./actions/authActions";
import { logoutUser } from "./api/authApi"
import { Provider } from "react-redux";
import store from "./store";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import ChangePassword from "./components/auth/ChangePassword"
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
if (localStorage.jwtToken1) {
  // Set auth token header auth
  const token = localStorage.jwtToken1;
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
  constructor(props){
    super(props);
    this.state = {
      adminLatitude: 31.557861,
      adminLongitude: 74.390744,
      distance: 0,
    }
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.coords){
      console.log("..................", nextProps.coords.latitude);
      console.log("...................", nextProps.coords.longitude);
      let obj1={
        latitude: this.state.adminLatitude,
        longitude: this.state.adminLongitude
      }
      let obj2={
        latitude: nextProps.coords.latitude,
        longitude: nextProps.coords.longitude
      }
      let distance = geolib.getDistanceSimple(
        obj1,
        obj2,
        {enableHighAccuracy: true}
      )
      this.setState({
        distance: distance
      },()=>{
        console.log(this.state.distance);
      })
    }
  }
  render() {
    return (
      <Provider store={store}>
        <div>
        <Router>
          <div className="App">
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/changePassword" component={ChangePassword} />
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
export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(App);