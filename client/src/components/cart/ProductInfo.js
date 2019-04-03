import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addIntoCart } from './../../api/productApi'
class ProductInfo extends Component{
    constructor(props){
        super(props);
        this.state={
            quantity: 1
        }
        this.handleQuantity = this.handleQuantity.bind(this);
        this.addCart = this.addCart.bind(this);
    }
    handleQuantity(num){
        if((this.state.quantity + num) > 1){
            this.setState({quantity: this.state.quantity + num})
        }
    }
    addCart(){
        const { product } = this.props;
        let cartItem= {
            product: product,
            quantity: this.state.quantity,
            total: parseFloat(product.skus[0].price) * this.state.quantity,
        }
        let cart ={
            sessionId: this.props.auth.user.id,
            status: 'inCart',
            cartItems: cartItem,
            total: parseFloat(product.skus[0].price) * this.state.quantity,
        }
        debugger;
        this.props.addIntoCart(cart);
    }
    render(){
        const { product } = this.props;
        return(
            <div className="product_info_container">
                <div className="name">
                    {product && product.name}
                </div>
                <div className="sku">SKU#: {product && product.pid}</div>
                <div className="review">
                    Be the first to review this product       
                </div>
                <div className="status">{product && product.skus && product.skus[0].out_of_stock ? 'Out Of Stock' : 'In Stock'}</div>
                <div className="price">
                    <div className="current_price">Price#: {product && product.skus && product.skus[0].price} PK</div>
                    <div className="prev_price"></div>
                </div>
                <div className="quantity">
                    <div className="minus" onClick={() => this.handleQuantity(-1)}>-</div>
                    <div className="count">{this.state.quantity}</div>
                    <div className="plus" onClick={() => this.handleQuantity(1)}>+</div>
                </div>
                <div className="add_cart_btn" onClick={this.addCart}>ADD TO CART</div>
            </div>
        )
    }
}
ProductInfo.propTypes = {
    addIntoCart: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
    auth: state.auth,
});
export default connect(mapStateToProps, { addIntoCart })(ProductInfo)