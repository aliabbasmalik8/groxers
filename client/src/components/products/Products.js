import React, { Component } from 'react'
import Product from './Product'
class Products extends Component{
    constructor(props){
        super(props);
        this.state={
            products: [],
        }
        this.filterList = this.filterList.bind(this);
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
            </div>
        )
    }
}
export default Products