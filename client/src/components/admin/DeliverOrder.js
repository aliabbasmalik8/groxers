import React, { Component } from 'react'
import Order from './Order'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAdminAllDeliverOrders } from './../../api/productApi'
class DeliverOrder extends Component{
    componentDidMount(){
        this.props.getAdminAllDeliverOrders();
    }
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
DeliverOrder.propTypes = {
    getAdminAllDeliverOrders: PropTypes.func.isRequired,
};
export default connect(null, { getAdminAllDeliverOrders })(DeliverOrder);