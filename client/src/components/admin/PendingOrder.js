import React, { Component } from 'react'
import Order from './Order'
class PendingOrder extends Component{
    render(){
        const { orders } = this.props;
        return(
            <div className="orders_banner container">
                {
                    orders.map((order, index)=>{
                        return <Order key={'order-'+index} order={order} />
                    })
                }
            </div>
        )
    }
}
export default PendingOrder;