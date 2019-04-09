import React, { Component } from 'react'
import { connect } from 'react-redux'
import PageHeader from './../dashboard/PageHeader'
import Address from './Address'
import './checkout.scss'
class Checkout extends Component{
    render(){
        return(
            <div className="checkout_banner">
                <PageHeader />
                <div className="container address_container">
                    <div className="main_row row">
                        <Address />
                        <OrderSummary total={this.props.total} cartCount={this.props.cartCount}/>
                    </div>
                </div>
            </div>
        )
    }
}
function OrderSummary(props){
    const { total, cartCount} = props;
    return(
        <div className="order_summry col-4">
            <div className="title">ORDER SUMMARY</div>
            <div className="content_box">
                <div className="_row">
                    <div>ORDER TOTAL</div>
                    <div>{'PKR '+total}</div>
                </div>
                <div className="_row">
                    <div>ITEMS TOTAL</div>
                    <div>{cartCount}</div>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = state => ({
    cartCount: state.items.cart && state.items.cart.length,
    total: state.items.total,
});
export default connect(mapStateToProps, null)(Checkout);