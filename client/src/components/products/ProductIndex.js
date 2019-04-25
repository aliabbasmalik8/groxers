import React, { Component } from 'react';
import { connect } from 'react-redux'
import Filter from './Filter'
import Products from './Products'
import PageHeader from './../dashboard/PageHeader'
import Footer from './../dashboard/Footer';
import './products.scss'
import 'react-rangeslider/lib/index.css'

class ProductIdex extends Component{
    constructor(props){
        super(props);
        this.state={
            products:[],
            catagory: "",
            subCatagory: '',
            source: "",
            price: 10000,
        }
        this.priceFilterig = this.priceFilterig.bind(this);
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
    priceFilterig(price){
        this.setState({
            price: price,
        })
    }
    render(){
        let catagory = this.props.match.params.productCatagory;
        let source = this.props.match.params.source;
        return(
            <div className="product_index_container">
                <PageHeader />
                <div className="products_filter_container_parent container">
                    <div className="products_filter_container">
                        <Filter catagory={catagory} source={source} priceFilterig={this.priceFilterig} price={this.state.price}/>
                        <Products products={this.state.products} catagory={catagory} subCatagory={this.state.subCatagory} source={this.state.source} price={this.state.price}/>
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