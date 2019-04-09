import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from "prop-types";
import { removeCartItem } from './../../api/productApi'
class Item extends Component{
    constructor(props){
        super(props);
        this.removeItem = this.removeItem.bind(this);
    }
    removeItem(){
        const { item } = this.props;
        let data = {
            sessionId: this.props.auth.user.id,
            cartItems: item,
        }
        this.props.removeCartItem(data);
    }
    render(){
        const { item } = this.props;
        return(
            <div className="item_banner row">
                <div className="image_parent col-2">
                    <img src={item && item.product && item.product.images && item.product.images[0]} alt="" />
                </div>
                <div className="desc col-7">
                    <div className="name">
                        {item.product.name}
                    </div>
                    <div className="description">
                        {item.product.description}
                    </div>
                </div>
                <div className="price col-1">
                    {item.product.skus[0].price}
                </div>
                <div className="qty col-1">
                    {item.quantity}
                </div>
                <div className="total col-1">
                    {item.total}
                </div>
                <div className="remove" onClick={this.removeItem}>
                    <img src="/images/trash.png" alt="trash"/>
                </div>
            </div>
        )
    }
}
Item.propTypes = {
    removeCartItem: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
    auth: state.auth,
});
export default connect(mapStateToProps, { removeCartItem })(Item);