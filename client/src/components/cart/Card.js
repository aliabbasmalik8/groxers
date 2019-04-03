import React, { Component } from 'react'
import ProductMeida from './ProductMedia'
import ProductInfo from './ProductInfo'
class Card extends Component{
    render(){
        return(
            <div className="card_container">
                <div className="product_card">
                    <ProductMeida />
                    <ProductInfo />
                </div>
            </div>
        )
    }
}
export default Card