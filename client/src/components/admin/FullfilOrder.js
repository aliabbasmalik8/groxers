import React, { Component } from 'react'
import Order from './Order'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAdminAllCompletedOrders } from './../../api/productApi'
class FullfileOrder extends Component{
    componentDidMount(){
        this.props.getAdminAllCompletedOrders();
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
FullfileOrder.propTypes = {
    getAdminAllCompletedOrders: PropTypes.func.isRequired,
};
export default connect(null, {getAdminAllCompletedOrders})(FullfileOrder);