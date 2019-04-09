import React, { Component } from 'react'
import PageHeader from './../dashboard/PageHeader'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Order from './Order'
import './orders.scss'
import { getOrders } from './../../api/productApi'
class Orders extends Component{
    componentDidMount(){
        let data ={
            sessionId: this.props.auth.user.id,
        }
        this.props.getOrders(data);
    }
    render(){
        const { pendingOrder, deliverOrder, deliveredOrder } = this.props;
        return(
            <div className="_banner">
                <PageHeader />
                <div className="container _container">
                    {
                        pendingOrder.map((order,index)=>{
                            return <Order key={'a'+index} order={order} />
                        })
                    }
                    {
                        deliverOrder.map((order,index)=>{
                            return <Order key={'b'+index} order={order} />
                        })
                    }
                    {
                        deliveredOrder.map((order,index)=>{
                            return <Order key={'c'+index} order={order} />
                        })
                    }
                </div>
            </div>
        )
    }
}
Orders.propTypes = {
    getOrders: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    pendingOrder: state.items.pendingOrder,
    deliverOrder: state.items.deliverOrder,
    deliveredOrder: state.items.deliveredOrder,
    auth: state.auth,
});
export default connect(mapStateToProps, { getOrders })(Orders);