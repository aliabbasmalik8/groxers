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
            catagory: "",
            subCatagory: '',
            source: "",
        }
    }
    componentDidMount(){
        let catagory = this.props.match.params.productCatagory;
        let subCatagory = this.props.match.params.subCatagory;
        let source = this.props.match.params.source;
        this.props.history.push('/products/'+catagory+"/"+subCatagory+"/"+source)
        const { products } = this.props;
        this.setState({
            subCatagory: subCatagory,
            source: source,
            products: products,
            catagory: catagory,
        })
    }
    componentDidUpdate(prevProps){
        if(prevProps.products !== this.props.products){
            const { products } = this.props;
            this.setState({
                products: products,
            })
        }
    }
    render(){
        let catagory = this.props.match.params.productCatagory;
        let source = this.props.match.params.source;
        return(
            <div className="product_index_container">
                <PageHeader />
                <div className="products_filter_container_parent container">
                    <div className="products_filter_container">
                        <Filter filterProducts={this.filterProducts} catagory={catagory} source={source}/>
                        <Products products={this.state.products} catagory={catagory} subCatagory={this.state.subCatagory} source={this.state.source}/>
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