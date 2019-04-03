import React, { Component } from 'react'

class ProductcatagoryCard extends Component{
    render(){
        return(
            <div className="single_card">
                <div className="image_parent">
                    <img src="https://d224nth7ac0evy.cloudfront.net/wysiwyg/lawn-collection-cat.jpg" alt=""/>
                </div>  
                <div className="content">
                    <div className="title">IDES PART</div>
                    <div className="shop_now_button">shop now</div>
                </div>
            </div>
        )
    }
}
export default ProductcatagoryCard;