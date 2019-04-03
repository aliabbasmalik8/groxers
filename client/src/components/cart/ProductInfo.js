import React, { Component } from 'react'

class ProductInfo extends Component{
    render(){
        const { product } = this.props;
        return(
            <div className="product_info_container">
                <div className="name">
                    {product && product.name}
                </div>
                <div className="sku">SKU#: {product && product.pid}</div>
                <div className="review">
                    Be the first to review this product       
                </div>
                <div className="status">{product && product.skus && product.skus[0].out_of_stock ? 'Out Of Stock' : 'In Stock'}</div>
                <div className="price">
                    <div className="current_price">{product && product.skus && product.skus[0].price}</div>
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