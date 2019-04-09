import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from "prop-types"
import { Link, withRouter } from "react-router-dom";
import { makeOrder } from './../../api/productApi'
class Address extends Component{
    constructor(props){
        super(props);
        this.state={
            streetAddress: "",
            city: "",
            zip: "",
            phone: "",
        }
    }
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value })
    };
    onSubmit = e => {
        let address={
            streetAddress: this.state.streetAddress,
            city: this.state.city,
            zip: this.state.zip,
            phone: this.state.phone,
        }
        let data = {
            address: address,
            sessionId: this.props.auth.user.id,
        }
        this.props.makeOrder(data);
    };
    render(){
        return(
            <div className="address_banner_top col-8">
                <div className="title">ADDRESS</div>
                <div className="address_banner">
                    <div className="input_parent">
                        <input onChange={this.onChange} id="streetAddress" type="text" value={this.state.email} placeholder="Street Address"/>
                    </div>
                    <div className="input_parent">
                        <input onChange={this.onChange} id="city" type="text" value={this.state.email} placeholder="City"/>
                    </div>
                    <div className="input_parent">
                        <input onChange={this.onChange} id="zip" type="text" value={this.state.email} placeholder="ZIP"/>
                    </div>
                    <div className="input_parent">
                        <input onChange={this.onChange} id="phone" type="text" value={this.state.email} placeholder="Phone Number"/>
                    </div>
                    <Link to={"/orders"} >
                        <div className="save_order" onClick={this.onSubmit}>Save Order</div>
                    </Link>
                </div>
            </div>
        )
    }
}
Address.propTypes = {
    makeOrder: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
    auth: state.auth,
});
export default connect(mapStateToProps, { makeOrder })(withRouter(Address));