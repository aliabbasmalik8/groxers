import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from 'react-redux'
import Product from './Product'
import { getProductsWithCatagory } from './../../api/productApi'
import Pagination from "react-js-pagination";
class Products extends Component{
    constructor(props){
        super(props);
        this.state={
            products: [],
            hasMore: true,
        }
        this.filterList = this.filterList.bind(this);
        this.getProducts = this.getProducts.bind(this);
    }
    componentDidMount(){
        let { products } = this.props;
        this.setState({
            products: products
        })
        this.getProducts(0);
    }
    componentDidUpdate(prevProps){
        if(prevProps.products !== this.props.products){
            let { products } = this.props;
            this.setState({
                products: products,
            })
        }
        if(prevProps.subCatagory !== this.props.subCatagory){
            this.getProducts(0);
        }
    }
    filterList(event){
        let { products } = this.props;
        if(products){
            var updatedList = products;
            updatedList = updatedList.filter(function(item){
                return item.name.toLowerCase().search( event.target.value.toLowerCase()) !== -1;
            });
            this.setState({products: updatedList});
        }
    }
    getProducts(page){
        const { catagory, subCatagory } = this.props;
        let data ={
            catagory: catagory,
            subcatagory: subCatagory,
            offset: page,
        }
        this.props.getProductsWithCatagory(data);
    }
    render(){
        const { products } = this.state;
        return(
            <div className="products_container">
                <div className="search_container">
                    <input type="text" placeholder="Search" className="input_contral" onChange={(e) => this.filterList(e)}/>
                    <i href="#" className="fa fa-search btn-search seacr_icon"></i>
                </div>
                    <div className="row products_row">
                        <div className="col-4">
                            {
                                products.map((product,index)=>{
                                    if((index+1)%3 ===1){
                                        return <Product key={index} product={product}/>
                                    }else{
                                        return null;
                                    }
                                })
                            }
                        </div>
                        <div className="col-4">
                            {
                                    products.map((product,index)=>{
                                    if((index+1)%3 ===2){
                                        return <Product key={index} product={product}/>
                                    }else{
                                        return null;
                                    }
                                })
                            }
                        </div>
                        <div className="col-4">
                            {
                                    products.map((product,index)=>{
                                    if((index+1)%3 ===0){
                                        return <Product key={index} product={product}/>
                                    }else{
                                        return null;
                                    }
                                })
                            }
                        </div>
                    </div>
                    <Pagination
                        activePage={1}
                        itemsCountPerPage={10}
                        totalItemsCount={450}
                        pageRangeDisplayed={5}
                        onChange={this.getProducts}
                    />
            </div>
        )
    }
}
Products.propTypes = {
    getProductsWithCatagory: PropTypes.func.isRequired,
};
export default connect(null, {getProductsWithCatagory})(Products)