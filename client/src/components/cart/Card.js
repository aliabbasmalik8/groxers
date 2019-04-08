import React, { Component } from 'react'
import ProductMeida from './ProductMedia'
import ProductInfo from './ProductInfo'
class Card extends Component{
    render(){
        const { product } = this.props;
        return(
            <div className="card_container container">
                <div className="product_card row">
                    <ProductMeida product={product}/>
                    <ProductInfo product={product}/>
                </div>
            </div>
        )
    }
}
export default Card