import React, { Component } from 'react'
import { connect } from 'react-redux'
import PageHeader from './../dashboard/PageHeader'
import Footer from './../dashboard/Footer';
import Card from './Card'
import './cart.scss'
class Cart extends Component{
    constructor(props){
        super(props);
        this.state={product: {}}
    }
    componentDidMount(){
        let source = this.props.match.params.source;
        let id = this.props.match.params.id;
        var product = this.props.products.find(obj => {
            return obj.pid === id && obj.source === source
        })
        this.setState({product})
     }
    componentDidUpdate(prevProps){
        if(prevProps.products !== this.props.products){
            let source = this.props.match.params.source;
            let id = this.props.match.params.id;
            var product = this.props.products.find(obj => {
             return obj.pid === id && obj.source === source
           })
           this.setState({product})
        }
    }
    render(){
        return(
            <div className="cart_container">
                <PageHeader />
                <Card product={this.state.product}/>
                <Footer />
            </div>
        )
    }
}
const mapStateToProps = state => ({
    products: state.items.products,
});
export default  connect(mapStateToProps, null)(Cart)