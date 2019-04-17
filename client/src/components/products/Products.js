import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from 'react-redux'
import Product from './Product'
import { getProductsWithCatagory } from './../../api/productApi'
import InfiniteScroll from 'react-infinite-scroller';
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
    }
    componentDidUpdate(prevProps){
        if(prevProps.products !== this.props.products){
            let { products } = this.props;
            this.setState({
                products: products,
            })
        }
    }
    filterList(event){
        let { products } = this.props;
        if(products){
            var updatedList = products;
            updatedList = updatedList.filter(function(item){
                return item.name.toLowerCase().search( event.target.value.toLowerCase()) !== -1;
            });
            this.setState({
                products: updatedList,
            });
        }
    }
    getProducts(page){
        const { catagory, subCatagory, source, hasMore } = this.props;
        let data ={
            catagory: catagory,
            subcatagory: subCatagory,
            offset: page-1,
            source: source,
        }
        this.props.getProductsWithCatagory(data);
        if(hasMore === false){
            this.setState({hasMore: false})
        }
    }
    render(){
        const { products } = this.state;
        return(
            <div className="products_container">
                <div className="search_container">
                    <input type="text" placeholder="Search" className="input_contral" onChange={(e) => this.filterList(e)}/>
                    <i href="#" className="fa fa-search btn-search seacr_icon"></i>
                </div>
                <InfiniteScroll
                pageStart={0}
                loadMore={this.getProducts}
                hasMore={this.state.hasMore}
                >
                    <div className="row products_row">
                        <div className="col-lg-4 col-sm-12">
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
                        <div className="col-lg-4 col-sm-12">
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
                        <div className="col-lg-4 col-sm-12">
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
                </InfiniteScroll>
            </div>
        )
    }
}
Products.propTypes = {
    getProductsWithCatagory: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
    hasMore: state.items.hasMore,
});
export default connect(mapStateToProps, {getProductsWithCatagory})(Products)