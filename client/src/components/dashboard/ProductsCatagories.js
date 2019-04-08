import React, { Component } from 'react'
import ProductcatagoryCard from './ProductcatogryCard';
class ProductsCatagories extends Component{
    render(){
        return(
            <div className="catagory_cards container">
                <div className="single_row">
                    <ProductcatagoryCard name={'Electronics'} image={'https://www.alfatah.pk/media/catalog/product/cache/1/small_image/250x250/9df78eab33525d08d6e5fb8d27136e95/a/f/afp-000134935_4.png'}/>
                    <ProductcatagoryCard name={"Men's Clothing"} image={'https://d224nth7ac0evy.cloudfront.net/wysiwyg/men-Home-unstitched_2.jpg'}/>
                    <ProductcatagoryCard name={"Women's Clothing"} image={'https://d224nth7ac0evy.cloudfront.net/wysiwyg/lawn-collection-cat.jpg'}/>
                </div>
                <div className="single_row">
                    <ProductcatagoryCard name={'Accessories'} image={'https://www.alfatah.pk/media/catalog/product/cache/1/small_image/250x250/9df78eab33525d08d6e5fb8d27136e95/a/f/afp-000171489.png'}/>
                    <ProductcatagoryCard name={'Decoration'} image={'https://www.alfatah.pk/media/catalog/product/cache/1/small_image/250x250/9df78eab33525d08d6e5fb8d27136e95/a/f/afp-000030031.png'}/>
                    <ProductcatagoryCard name={'Toys'} image={'https://www.alfatah.pk/media/catalog/product/cache/1/small_image/250x250/9df78eab33525d08d6e5fb8d27136e95/a/f/afp-000163868.png'}/>
                </div>
                <div className="single_row">
                    <ProductcatagoryCard name={'Grocery'} image={'https://www.alfatah.pk/media/catalog/product/cache/1/small_image/250x250/9df78eab33525d08d6e5fb8d27136e95/a/f/afp-000113602.png'}/>
                    <ProductcatagoryCard name={'Health and Beauty'} image={'https://www.alfatah.pk/media/catalog/product/cache/1/small_image/250x250/9df78eab33525d08d6e5fb8d27136e95/a/f/afp-000116907.png'}/>
                    <ProductcatagoryCard name={'Household Essentials'} image={'https://www.alfatah.pk/media/catalog/product/cache/1/small_image/250x250/9df78eab33525d08d6e5fb8d27136e95/a/f/afp-000117242.png'}/>
                </div>
                <div className="single_row">
                    <ProductcatagoryCard name={'Baby Care'} image={'https://www.alfatah.pk/media/catalog/product/cache/1/small_image/250x250/9df78eab33525d08d6e5fb8d27136e95/a/f/afp-000113797.png'}/>
                    <ProductcatagoryCard name={'Pet Food'} image={'https://www.alfatah.pk/media/catalog/product/cache/1/small_image/250x250/9df78eab33525d08d6e5fb8d27136e95/a/f/afp-000106169_1.png'}/>
                </div>
            </div>
        )
    }
}
export default ProductsCatagories;