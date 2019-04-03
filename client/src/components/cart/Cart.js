import React, { Component } from 'react'
import PageHeader from './../dashboard/PageHeader'
import Footer from './../dashboard/Footer';
import Card from './Card'
import './cart.scss'
class Cart extends Component{
    render(){
        return(
            <div className="cart_container">
                <PageHeader />
                <Card />
                <Footer />
            </div>
        )
    }
}
export default Cart