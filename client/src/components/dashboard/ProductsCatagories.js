import React, { Component } from 'react'
import ProductcatagoryCard from './ProductcatogryCard';
class ProductsCatagories extends Component{
    render(){
        return(
            <div className="catagory_cards container">
                <div className="single_row">
                    <ProductcatagoryCard name={'A'} source={'alfatah'} image={'https://www.alfatah.pk/media/catalog/product/cache/1/small_image/250x250/9df78eab33525d08d6e5fb8d27136e95/a/f/afp-000171489.png'}/>
                    <ProductcatagoryCard name={'B'} source={'gulahmed'} image={'https://www.alfatah.pk/media/catalog/product/cache/1/small_image/250x250/9df78eab33525d08d6e5fb8d27136e95/a/f/afp-000030031.png'}/>
                    <ProductcatagoryCard name={'C'} source={'khaadi'} image={'https://www.alfatah.pk/media/catalog/product/cache/1/small_image/250x250/9df78eab33525d08d6e5fb8d27136e95/a/f/afp-000163868.png'}/>
                </div>
                <div className="single_row">
                    <ProductcatagoryCard name={'Grocery'} source={'mcc'} image={'https://www.alfatah.pk/media/catalog/product/cache/1/small_image/250x250/9df78eab33525d08d6e5fb8d27136e95/a/f/afp-000113602.png'}/>
                    <ProductcatagoryCard name={'Health and Beauty'} source={'metro'} image={'https://www.alfatah.pk/media/catalog/product/cache/1/small_image/250x250/9df78eab33525d08d6e5fb8d27136e95/a/f/afp-000116907.png'}/>
                    <ProductcatagoryCard name={'Household Essentials'} source={'sanasafinaz'} image={'https://www.alfatah.pk/media/catalog/product/cache/1/small_image/250x250/9df78eab33525d08d6e5fb8d27136e95/a/f/afp-000117242.png'}/>
                </div>
                <div className="single_row">
                    <ProductcatagoryCard name={'Grocery'} source={'warda'} image={'https://www.alfatah.pk/media/catalog/product/cache/1/small_image/250x250/9df78eab33525d08d6e5fb8d27136e95/a/f/afp-000113602.png'}/>
                    <ProductcatagoryCard name={'Health and Beauty'} source={'J.'} image={'https://www.alfatah.pk/media/catalog/product/cache/1/small_image/250x250/9df78eab33525d08d6e5fb8d27136e95/a/f/afp-000116907.png'}/>
                </div>
            </div>
        )
    }
}
export default ProductsCatagories;