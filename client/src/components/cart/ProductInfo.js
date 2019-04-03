import React, { Component } from 'react'

class ProductInfo extends Component{
    render(){
        return(
            <div className="product_info_container">
                <div className="name">
                Mustard 1 Pc Cambric Digital Printed  SCN-52
                </div>
                <div className="sku">SKU#: WFC-17-146577</div>
                <div className="review">
                    Be the first to review this product       
                </div>
                <div className="status">In stock</div>
                <div className="price">
                    <div className="current_price">PKR 1,200</div>
                    <div className="prev_price"></div>
                </div>
                <div className="quantity">
                    <div className="minus">-</div>
                    <div className="count">1</div>
                    <div className="plus">+</div>
                </div>
                <div className="add_cart_btn">ADD TO CART</div>
            </div>
        )
    }
}
export default ProductInfo