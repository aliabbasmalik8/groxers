import React, { Component } from 'react'
import { main_to_sub_category_map } from './constants'
class Filter extends Component{
    constructor(props){
        super(props);
        this.state={
            subCatagories: []
        }
    }
    componentDidMount(){
        let { catagory } = this.props;
        this.setState({
            subCatagories: [...main_to_sub_category_map[catagory]]
        })
    }
    render(){
        let { filterProducts } = this.props;
        return(
            <div className="sub_catagory_filter_parent">
                <div className="sub_catagory_filter">
                {
                    this.state.subCatagories.map((catagory, index) =>{
                        return <SingleCatagory key={index} name={catagory} filterProducts={filterProducts}/>
                    })
                }
                </div>
            </div>
        )
    }
}
class SingleCatagory extends Component{
    render(){
        const { name, filterProducts } = this.props;
        return(
            <div className="single_catagory" onClick={()=>filterProducts(name)}>
                <div className="content">{''+name}</div>
            </div>
        )
    }
}
export default Filter;