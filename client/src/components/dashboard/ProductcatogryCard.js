import React, { Component } from 'react'
import { Link } from "react-router-dom";
class ProductcatagoryCard extends Component{
    render(){
        const { name, image, source } = this.props;
        return(
            <div className="single_card">
                <Link to={"/products/all/all/"+source}>
                    { /*<div className="image_parent">
                        <img src={image} alt=""/>
                    </div> */}  
                    <div className="content">
                        <div className="title">{name}</div>
                        <div className="shop_now_button">shop now</div>
                    </div>
                </Link>
            </div>
        )
    }
}
export default ProductcatagoryCard;