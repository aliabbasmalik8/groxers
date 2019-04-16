import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import Popup from "reactjs-popup";
import { logoutUser } from "../../api/authApi";
import { getProducts, getCartItems } from './../../api/productApi'
import Card from './Card';
class PageHeader extends Component{
    componentDidMount(){
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
        const { cart, total, auth } = this.props;
        return(
            <div className="page_header">
                <div className="panel_warpper">
                    {
                        this.props.auth.isAuthenticated &&
                        <div className="user_info">
                            <div className="user_name">Hi {auth.user.name}</div>
                            <Link to={"/orders"}>
                                My Orders
                            </Link>
                        </div>||
                        <div></div>
                    }
                    {
                        this.props.auth.isAuthenticated ?
                            <span className="ch_header">
                                <Link to={"/changePassword"}>
                                    <div className="change_password">CHANGE PASSWORD</div>
                                </Link>
                                <div className="signout" onClick={()=>this.signOut()}><i class="fas fa-sign-out-alt"></i> SIGN OUT</div>
                            </span>:
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
                <div className="header_content">
                    <Link to={"/"}>
                        <div className="logo_parent">
                            <img src="/images/444.png" alt=""/>
                        </div>
                    </Link>
                    <Link to={"/cart"}>
                        <div>
                            <i className="fas fa-cart-plus"></i>&nbsp;
                            {'Cart: ('+cart.length+') ' + total + ' PK'}
                        </div>
                    </Link>
                </div>
                <nav className="header_wrapper_content">
                    <div className="header_wrapper_bottom">
                        <NavItem catagory={"Men's Clothing"} width={'250px'} direction={'bottom right'}/>
                        <NavItem catagory={"Women's Clothing"} width={'400px'} direction={'bottom center'}/>
                        <NavItem catagory={'Accessories'} width={'400px'} direction={'bottom center'}/>
                        <NavItem catagory={'Decoration'} width={'500px'} direction={'bottom center'}/>
                        <NavItem catagory={'Toys'} width={'400px'} direction={'bottom center'}/>
                        <NavItem catagory={'Grocery'} width={'400px'} direction={'bottom center'}/>
                        <NavItem catagory={'Health and Beauty'} width={'400px'} direction={'bottom center'}/>
                        <NavItem catagory={'Household Essentials'} width={'400px'} direction={'bottom center'}/>
                        <NavItem catagory={'Baby Care'} width={'300px'} direction={'bottom center'}/>
                        <NavItem catagory={'Pet Food'} width={'300px'} direction={'bottom left'}/>
                    </div>
                </nav>
            </div>
        )
    }
}
function NavItem(props){
    const { catagory, width, direction } = props;
    return(
        <a href={"/products/"+catagory+"/all/all"}>
            <Popup
                trigger={<div className="inner_header">{catagory}</div>}
                position={direction}
                contentStyle={{ width: width }}
                on="hover"
                >
                <Card catagory={catagory}/>
            </Popup>
        </a>
    )
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
export default connect(mapStateToProps,{ getProducts, logoutUser, getCartItems })((PageHeader))