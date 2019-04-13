import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Product extends Component{
    render(){
        const { product } = this.props;
        return(
            <div className="product_container">
                <Link to={"/cart/"+product.source+"/"+product.pid}>
                    <div className="image_parent">
                        <img src={product.images[0]} alt="" />
                    </div>
                    <div className="content">
                        <div className="items_name">
                            {product.name}
                        </div>
                        <div className="price">
                            <div className="current_price">{'PKR ' + product.skus[0].price}</div>
                            <div className="prev_price"></div>
                        </div>
                        <div className="learn_more">Product Detail</div>
                    </div>
                 </Link>
            </div>
        )
    }
}
export default Product