import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Product extends Component{
    render(){
        const { product } = this.props;
        return(
            <div className="product_container">
                <div className="image_parent">
                    <img src={product.images[0]} alt="" />
                </div>
                <div className="items_name">
                    {product.name}
                </div>
                <div className="price">
                    <div className="current_price">{product.skus[0].price}</div>
                    <div className="prev_price"></div>
                </div>
                <Link to={"/cart/"+product.source+"/"+product.pid}>
                    <div className="learn_more">Add to cart</div>
                </Link>
            </div>
        )
    }
}
export default Product