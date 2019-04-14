import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from "prop-types";
import { completeOrder } from './../../api/productApi'
import Item from './Item'
class Order extends Component{
    constructor(props){
        super(props);
        this.OrderComplete = this.OrderComplete.bind(this);
    }
    OrderComplete(){
        const { order } = this.props;
        const orderData = {
            _id: order._id
        }
        this.props.completeOrder(orderData);
    }
    render(){
        const { order } = this.props;
        return(
            <div className="order_card container">
                <div className="upper_div">
                    <div className="parent_class id">
                        <div className="title">Total Items</div> 
                        <div className="content">
                            {order.cartItems && order.cartItems.length}
                        </div>
                    </div>
                    <div className="parent_class total">
                        <div className="title">Total Price</div>
                        <div className="content">
                            {order.total}
                        </div>
                    </div>
                    <div className="parent_class status">
                        <div className="title">Status</div>
                        <div className="content">
                            {
                                order.status === "makeOrder" && 'Pending' ||
                                order.status === "deleverOrder" && 'Order Deliver' ||
                                order.status === "completeOrder" && 'Completed'
                            }
                        </div>
                    </div>
                    {
                        order.status === "deleverOrder" &&
                        <div className="btn order_complete" onClick={this.OrderComplete}>COMPLETE ORDER</div>
                    }
                </div>
                <div className="items">
                    <div className="single_item title">
                        <div className="header name">NAME</div>
                        <div className="header price">PRICE</div>
                        <div className="header quantity">QUANTITY</div>
                        <div className="header total">TOTAL</div>
                    </div>
                    {
                        order.cartItems && order.cartItems.map((item, index)=>{
                            return <Item index={order._id + index} item={item} />
                        })
                    }
                </div>
            </div>
        )
    }
}
Order.propTypes = {
    completeOrder: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
    auth: state.auth,
  });
export default connect(mapStateToProps, { completeOrder })(Order);