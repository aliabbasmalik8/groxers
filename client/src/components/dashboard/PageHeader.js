import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { logoutUser } from "../../api/authApi";
import { getProducts, getCartItems } from './../../api/productApi'
class PageHeader extends Component{
    componentDidMount(){
        this.props.products.length === 0 &&
            this.props.getProducts();
        if(this.props.cart.length === 0){
            let data={
                sessionId: this.props.auth.user.id,
            }
            this.props.getCartItems(data);
        }
    }
    signOut(){
        this.props.logoutUser();
    }
    render(){
        return(
            <div className="page_header">
                <div className="panel_warpper">
                    {
                        this.props.auth.isAuthenticated ?
                            <div className="signout" onClick={()=>this.signOut()}>SIGN OUT</div> :
                        <span>
                            <Link to={"/register"}>
                                <div className="create_account">CREATE AN ACCOUNT</div>
                            </Link>
                            <Link to={"/login"}>
                                <div className="sign_up">SIGN IN</div>
                            </Link>
                        </span>
                    }
                </div>
                <nav className="header_wrapper_content">
                    <div className="header_content">
                        <div className="logo_parent">
                            <img src="/images/444.png" alt=""/>
                        </div>
                        <div className="cart_image_parent">
                            <img src="" alt=""/>
                        </div>
                    </div>
                    <div className="header_wrapper_bottom">
                        <div className="inner_header">
                            Hello world
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
PageHeader.propTypes = {
    getProducts: PropTypes.func.isRequired,
    logoutUser: PropTypes.func.isRequired,
    getCartItems:  PropTypes.func.isRequired
};
const mapStateToProps = state => ({
    products: state.items.products,
    auth: state.auth,
    cart: state.items.cart,
});
export default connect(mapStateToProps,{ getProducts, logoutUser, getCartItems })(PageHeader)