import React, { Component } from 'react'
import Product from './Product'
class Products extends Component{
    constructor(props){
        super(props);
        this.state={
            products: [],
        }
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
                products: products
            })
        }
    }
    render(){
        const { products } = this.state;
        return(
            <div className="products_container">
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
            </div>
        )
    }
}
export default Products