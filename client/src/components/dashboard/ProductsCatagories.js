import React, { Component } from 'react'
import ProductcatagoryCard from './ProductcatogryCard';
class ProductsCatagories extends Component{
    render(){
        return(
            <div className="catagory_cards container">
                <div className="single_row">
                    <ProductcatagoryCard name={'alfatah'} source={'alfatah'} image={'https://www.alfatah.pk/media/catalog/product/cache/1/small_image/250x250/9df78eab33525d08d6e5fb8d27136e95/a/f/afp-000171489.png'}/>
                    <ProductcatagoryCard name={'gulahmed'} source={'gulahmed'} image={'https://www.alfatah.pk/media/catalog/product/cache/1/small_image/250x250/9df78eab33525d08d6e5fb8d27136e95/a/f/afp-000030031.png'}/>
                    <ProductcatagoryCard name={'khaadi'} source={'khaadi'} image={'https://www.alfatah.pk/media/catalog/product/cache/1/small_image/250x250/9df78eab33525d08d6e5fb8d27136e95/a/f/afp-000163868.png'}/>
                </div>
                <div className="single_row">
                    <ProductcatagoryCard name={'mcc'} source={'mcc'} image={'https://www.alfatah.pk/media/catalog/product/cache/1/small_image/250x250/9df78eab33525d08d6e5fb8d27136e95/a/f/afp-000113602.png'}/>
                    <ProductcatagoryCard name={'metro'} source={'metro'} image={'https://www.alfatah.pk/media/catalog/product/cache/1/small_image/250x250/9df78eab33525d08d6e5fb8d27136e95/a/f/afp-000116907.png'}/>
                    <ProductcatagoryCard name={'sanasafinaz'} source={'sanasafinaz'} image={'https://www.alfatah.pk/media/catalog/product/cache/1/small_image/250x250/9df78eab33525d08d6e5fb8d27136e95/a/f/afp-000117242.png'}/>
                </div>
                <div className="single_row">
                    <ProductcatagoryCard name={'warda'} source={'warda'} image={'https://www.alfatah.pk/media/catalog/product/cache/1/small_image/250x250/9df78eab33525d08d6e5fb8d27136e95/a/f/afp-000113602.png'}/>
                    <ProductcatagoryCard name={'J.'} source={'j.'} image={'https://www.alfatah.pk/media/catalog/product/cache/1/small_image/250x250/9df78eab33525d08d6e5fb8d27136e95/a/f/afp-000116907.png'}/>
                </div>
            </div>
        )
    }
}
export default ProductsCatagories;