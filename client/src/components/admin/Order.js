import React, { Component } from 'react'
class Order extends Component{
    render(){
        const { order } = this.props;
        return(
            <div className="order_banner">
                <div className="user_info_part">
                </div>
            </div>
        )
    }
}
export default Order;