import React, { Component } from 'react'
import ProductcatagoryCard from './ProductcatogryCard';
class ProductsCatagories extends Component{
    render(){
        return(
            <div className="catagory_cards">
                <div className="single_row">
                    <ProductcatagoryCard />
                    <ProductcatagoryCard />
                    <ProductcatagoryCard />
                </div>
                <div className="single_row">
                    <ProductcatagoryCard />
                    <ProductcatagoryCard />
                    <ProductcatagoryCard />
                </div>
            </div>
        )
    }
}
export default ProductsCatagories;