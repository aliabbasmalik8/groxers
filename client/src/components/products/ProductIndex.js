import React, { Component } from 'react';
import { connect } from 'react-redux'
import Filter from './Filter'
import Products from './Products'
import PageHeader from './../dashboard/PageHeader'
import Footer from './../dashboard/Footer';
import './products.scss'
class ProductIdex extends Component{
    constructor(props){
        super(props);
        this.state={
            products:[],
        }
        this.filterProducts = this.filterProducts.bind(this);
    }
    componentDidMount(){
        const { products } = this.props;
        let catagory = this.props.match.params.productCatagory;
        let filterProducts = [];
        products.map(product =>{
            if(product.category[0] === catagory){
                return filterProducts.push(product)
            }else{
                return null;
            }
        })
        this.setState({products: [...filterProducts]})
    }
    componentDidUpdate(prevProps){
        if(prevProps.products !== this.props.products){
            const { products } = this.props;
            let catagory = this.props.match.params.productCatagory;
            let filterProducts = [];
            products.map(product => {
                if(product.category[0] === catagory){
                    return filterProducts.push(product)
                }else{
                    return null;
                }
            })
            this.setState({
                products: [...filterProducts]
            })
        }
    }
    filterProducts(subCatagories){
        const { products } = this.props;
        let catagory = this.props.match.params.productCatagory;
        let filterProducts = [];
        products.map(product => {
            if(product.category[0] === catagory && product.category[1].toLowerCase() === subCatagories){
                return filterProducts.push(product)
            }else{
                return null;
            }
        })
        this.setState({
            products: filterProducts
        })
    }
    render(){
        let catagory = this.props.match.params.productCatagory;
        return(
            <div className="product_index_container">
                <PageHeader />
                <div className="products_filter_container_parent">
                    <div className="products_filter_container">
                        <Filter filterProducts={this.filterProducts} catagory={catagory}/>
                        <Products products={this.state.products}/>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
const mapStateToProps = state => ({
    products: state.items.products,
});
export default connect(mapStateToProps, null)(ProductIdex);