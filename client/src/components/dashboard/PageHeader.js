import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from "prop-types";
import { getProducts } from './../../api/productApi'
class PageHeader extends Component{
    componentDidMount(){
        this.props.products.length === 0 &&
            this.props.getProducts();
    }
    render(){
        return(
            <div className="page_header">
                <div className="panel_warpper">
                    <div className="create_account">CREATE AN ACCOUNT</div>
                    <div className="sign_up">SIGN IN</div>
                </div>
                <nav className="header_wrapper_content">
                    <div className="header_content">
                        <div className="logo_parent">
                            <img src="/images/444.png" alt=""/>
                        </div>
                        <div className="cart_image_parent">
                            <img src="" alt=""/>
                        </div>
                    </div>
                    <div className="header_wrapper_bottom">
                        <div className="inner_header">
                            Hello world
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
PageHeader.propTypes = {
    getProducts: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
    products: state.items.products,
});
export default connect(mapStateToProps,{ getProducts })(PageHeader)