import React, { Component }from 'react'
import PageHeader from './../dashboard/PageHeader'
import Items from './items'
import './cartList.scss'
import { setDistanceAction } from './../../actions/productAction'
import { connect } from 'react-redux'
import PropTypes from "prop-types";
class CartList extends Component{
    componentDidMount(){
        if(this.props.distance){
            this.props.setDistanceAction(this.props.distance)
        }
    }
    render(){
        return(
            <div className="cart_list_container">
                <PageHeader />
                <Items />
            </div>
        )
    }
}
CartList.propTypes = {
    setDistanceAction: PropTypes.func.isRequired,
};
export default connect(null, {setDistanceAction})(CartList)