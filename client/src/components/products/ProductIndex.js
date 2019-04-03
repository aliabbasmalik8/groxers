import React, { Component } from 'react';
import Filter from './Filter'
import Products from './Products'
import PageHeader from './../dashboard/PageHeader'
import Footer from './../dashboard/Footer';
import './products.scss'
class ProductIdex extends Component{
    render(){
        return(
            <div className="product_index_container">
                <PageHeader />
                <div className="products_filter_container_parent">
                    <div className="products_filter_container">
                        <Filter />
                        <Products />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
export default ProductIdex;