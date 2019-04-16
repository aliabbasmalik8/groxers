import React, { Component } from 'react'
import { main_to_sub_category_map, sub_catagories } from './constants'
import { Link } from "react-router-dom";
class Filter extends Component{
    constructor(props){
        super(props);
        this.state={
            subCatagories: []
        }
    }
    componentDidMount(){
        let { catagory, source } = this.props;
        if(catagory !== "all"){
            this.setState({
                subCatagories: [...main_to_sub_category_map[catagory]]
            })
        }else{
            this.setState({
                subCatagories: [...sub_catagories[source]]
            })
        }
    }
    render(){
        let { filterProducts } = this.props;
        let { catagory, source } = this.props;
        return(
            <div className="sub_catagory_filter_parent">
                <div className="sub_catagory_filter">
                {
                    this.state.subCatagories.map((subcatagory, index) =>{
                        return <SingleCatagory key={index} name={subcatagory} catagory={catagory} source={source} filterProducts={filterProducts}/>
                    })
                }
                </div>
            </div>
        )
    }
}
class SingleCatagory extends Component{
    render(){
        const { name, catagory, source } = this.props;
        return(
            <div className="single_catagory">
                <a href={"/products/"+catagory+"/"+name+"/"+source} className="content">{''+name}</a>
            </div>
        )
    }
}
export default Filter;