import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
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
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll(){
        
    }
    signOut(){
        this.props.logoutUser();
    }
    render(){
        // const { cart, total } = this.props;
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
                        <Link to={"/products/Electronics"}>
                            <div className="inner_header">Electronics</div>
                        </Link>
                        <Link to={"/products/Men's Clothing"}>
                            <div className="inner_header">Men's Clothing</div>
                        </Link>
                        <Link to={"/products/Women's Clothing"}>
                            <div className="inner_header">Women's Clothing</div>
                        </Link>
                        <Link to={"/products/Accessories"}>
                            <div className="inner_header">Accessories</div>
                        </Link>
                        <Link to={"/products/Decoration"}>
                            <div className="inner_header">Decoration</div>
                        </Link>
                        <Link to={"/products/Toys"}>
                            <div className="inner_header">Toys</div>
                        </Link>
                        <Link to={"/products/Grocery"}>
                            <div className="inner_header">Grocery</div>
                        </Link>
                        <Link to={"/products/Health and Beauty"}>
                            <div className="inner_header">Health and Beauty</div>
                        </Link>
                        <Link to={"/products/Household Essentials"}>
                            <div className="inner_header">Household Essentials</div>
                        </Link>
                        <Link to={"/products/Baby Care"}>
                            <div className="inner_header">Baby Care</div>
                        </Link>
                        <Link to={"/products/Pet Food"}>
                            <div className="inner_header">Pet Food</div>
                        </Link>
                        
                        {/* <Link to={"/cart"}>
                            <div>
                                <i className="fas fa-cart-plus"></i>&nbsp;
                                {'Cart: ('+cart.length+') ' + total + ' PK'}
                            </div>
                        </Link> */}
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
    total: state.items.total,
});
export default connect(mapStateToProps,{ getProducts, logoutUser, getCartItems })(withRouter(PageHeader))