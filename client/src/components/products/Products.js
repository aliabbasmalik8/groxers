import React, { Component } from 'react'
import Product from './Product'
class Products extends Component{
    render(){
        return(
            <div className="products_container">
                <div className="row products_row">
                    <Product />
                    <Product />
                    <Product />
                </div>
            </div>
        )
    }
}
export default Products