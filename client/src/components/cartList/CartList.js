import React, { Component }from 'react'
import PageHeader from './../dashboard/PageHeader'
import Footer from './../dashboard/Footer';
import Items from './items'
import './cartList.scss'
class CartList extends Component{
    render(){
        return(
            <div className="cart_list_container">
                <PageHeader />
                <Items />
                <Footer />
            </div>
        )
    }
}
export default CartList