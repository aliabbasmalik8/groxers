import React, { Component } from 'react'
class Order extends Component{
    render(){
        const { order } = this.props;
        return(
            <div className="order_banner">
                <div className="user_info_part">
                    <div className="info_row">
                        <div className="info_col">{order.address.streetAddress}</div>
                        <div className="info_col">{order.address.streetAddress}</div>
                    </div>
                    <div className="info_row">
                        <div className="info_col">{order.address.streetAddress}</div>
                        <div className="info_col">{order.address.streetAddress}</div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Order;