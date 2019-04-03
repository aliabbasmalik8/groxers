import React, { Component } from 'react'
class Filter extends Component{
    render(){
        return(
            <div className="sub_catagory_filter_parent">
                <div className="sub_catagory_filter">
                    <SingleCatagory />
                    <SingleCatagory />
                    <SingleCatagory />
                    <SingleCatagory />
                </div>
            </div>
        )
    }
}
class SingleCatagory extends Component{
    render(){
        return(
            <div className="single_catagory">
                <div className="content">Test log</div>
            </div>
        )
    }
}
export default Filter;