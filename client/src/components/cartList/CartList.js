import React, { Component }from 'react'
import PageHeader from './../dashboard/PageHeader'
import Items from './items'
import './cartList.scss'
class CartList extends Component{
    render(){
        return(
            <div className="cart_list_container">
                <PageHeader />
                <Items />
            </div>
        )
    }
}
export default CartList