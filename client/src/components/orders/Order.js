import React, { Component } from 'react'
class Order extends Component{
    render(){
        const { order } = this.props;
        return(
            <div className="order_card">
                <div className="id">{order._id}</div>
                <div className="total">{order.total}</div>
                <div className="status">
                    {
                        order.status === "makeOrder" && 'Pending' ||
                        order.status === "deleverOrder" && 'Order parse' ||
                        order.status === "deleveredOrder" && 'Delivered'
                    }
                </div>
            </div>
        )
    }
}

export default Order;