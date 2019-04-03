import React, { Component } from 'react';
class Product extends Component{
    render(){
        return(
            <div className="product_container">
                <div className="image_parent">
                    <img src="https://d224nth7ac0evy.cloudfront.net/catalog/product/cache/9a894c8599c9525ecf8d6b4d9042d360/l/c/lcs-4_1_.jpg" alt="" />
                </div>
                <div className="items_name">
                    Test
                </div>
                <div className="price">
                    <div className="current_price">100</div>
                    <div className="prev_price">100</div>
                </div>
                <div className="learn_more">Learn More</div>
            </div>
        )
    }
}
export default Product