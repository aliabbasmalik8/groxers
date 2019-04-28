import React, { Component } from 'react'
class ProductcatagoryCard extends Component{
    render(){
        const { name, source } = this.props;
        return(
            <div className="single_card">
                <a href={"/products/all/all/"+source}>
                    { /*<div className="image_parent">
                        <img src={image} alt=""/>
                    </div> */}  
                    <div className="content">
                        <div className="title">{name}</div>
                        <div className="shop_now_button">shop now</div>
                    </div>
                </a>
            </div>
        )
    }
}
export default ProductcatagoryCard;