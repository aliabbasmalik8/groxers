import React, { Component } from 'react'
import { main_to_sub_category_map } from './../products/constants'
class SlidingMenu extends Component{
    render(){
        const { closeCallback } = this.props;
        return(
            <div className="sliding_menu">
                <div className="uper_div" onClick={()=>closeCallback()}>
                    <i class="fas fa-times"></i>
                </div>
                <div className="catagories">
                    <NavItem catagory={"Men's Clothing"}/>
                    <NavItem catagory={"Women's Clothing"} />
                    <NavItem catagory={'Accessories'} />
                    <NavItem catagory={'Decoration'} width={'500px'} direction={'bottom center'}/>
                    <NavItem catagory={'Toys'} />
                    <NavItem catagory={'Grocery'} />
                    <NavItem catagory={'Health and Beauty'} />
                    <NavItem catagory={'Household Essentials'} />
                    <NavItem catagory={'Baby Care'} />
                    <NavItem catagory={'Pet Food'}/>
                </div>
            </div>
        )
    }
}
class NavItem extends Component{
    constructor(props){
        super(props);
        this.state={
            subCatagory: false,
        }
        this.handleSubCatagory = this.handleSubCatagory.bind(this);
    }
    handleSubCatagory(){
        this.setState({subCatagory: !this.state.subCatagory})
    }
    render(){
        const { catagory } = this.props;
        return(
            <div className="_p_parent">
                <div className="main_catagory" onClick={this.handleSubCatagory}>
                    { catagory }
                </div>
                {
                    this.state.subCatagory &&
                    main_to_sub_category_map[catagory].map((cata, index)=>{
                        return <SubCatagory subCatagory={cata} catagory={catagory} key={index}/>
                    })
                }
            </div>
        )
    }
}
function SubCatagory(props){
    const { subCatagory, catagory } = props;
    return(
        <div className="sub_catagory">
            <a href={'/products/'+catagory+'/'+subCatagory+"/all"} className="">
                {'-'+ subCatagory }
            </a>
        </div>
    )
}
export default SlidingMenu;