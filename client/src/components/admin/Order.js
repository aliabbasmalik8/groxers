import React, { Component } from 'react'
import Item from './Item'
import { deliverOrder, deleteOrder } from './../../api/productApi'
import PropTypes from "prop-types";
import { connect } from "react-redux";
class Order extends Component{
    constructor(props){
        super(props);
        this._deliverOrder = this._deliverOrder.bind(this);
        this._deleteOrder = this._deleteOrder.bind(this);
    }
    _deliverOrder(){
        const { order } = this.props;
        const orderData = {
            _id: order._id
        }
        this.props.deliverOrder(orderData, order);
    }
    _deleteOrder(){
        const { order } = this.props;
        const orderData = {
            _id: order._id
        }
        this.props.deleteOrder(orderData, order);
    }
    render(){
        const { order } = this.props;
        return(
            <div className="order_banner">
                <div className="user_info_part">
                    <div className="user_info">User Info</div>
                    <div className="info_row">
                        <div className="info_col">
                            <div className="title">PHONE #</div>
                            <div className="content">{order.address.phone}</div>
                        </div>
                        <div className="info_col">
                            <div className="title">CITY</div>
                            <div className="content">{order.address.city}</div>
                        </div>
                    </div>
                    <div className="info_row">
                        <div className="info_col">
                            <div className="title">ZIP</div>
                            <div className="content">{order.address.zip}</div>
                        </div>
                        <div className="info_col">
                            <div className="title">ADDRESS</div>
                            <div className="content">{order.address.streetAddress}</div>
                        </div>
                    </div>
                </div>
                <div className="items">
                    <div className="single_item">
                        <div className="header pid">PID</div>
                        <div className="header name">NAME</div>
                        <div className="header source">SOURCE</div>
                        <div className="header price">PRICE</div>
                        <div className="header quantity qt">QUANTITY</div>
                        <div className="header quantity1">QTY</div>
                        <div className="header total">TOTAL</div>
                    </div>
                    {
                        order.cartItems.map((item, index)=>{
                            return <Item index={order._id + index} item={item} />
                        })
                    }
                </div>
                <div className="order_footer">
                    {
                        order.status === "makeOrder" &&
                        <div className="order_btn_parent">
                            <div className="btn" onClick={this._deliverOrder}>DELIVER ORDER</div>
                        </div>
                    }
                    {
                        order.status === "makeOrder" &&
                        <div className="order_btn_parent">
                            <div className="btn btn1" onClick={this._deleteOrder}>DISCARD ORDER</div>
                        </div>
                    }
                    <div className="quantity">{'delivery charges: '+ (order.charges?order.charges: 250)}</div>
                    <div className="grand_total">{parseInt(order.total)+(order.charges ? order.charges : 250)}</div>
                </div>
            </div>
        )
    }
}
Order.propTypes = {
    deliverOrder: PropTypes.func.isRequired,
    deleteOrder: PropTypes.func.isRequired,
};
export default connect(null, {deliverOrder, deleteOrder})(Order);