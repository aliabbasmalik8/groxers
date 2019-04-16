import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { makeAdmin, removeAdmin } from './../../api/authApi'
class UserCard extends Component{
    constructor(props){
        super(props);
        this.provideAdminPrivilage = this.provideAdminPrivilage.bind(this);
        this.removeAdminPrivilage = this.removeAdminPrivilage.bind(this);
    }
    provideAdminPrivilage(){
        const { user } = this.props;
        let data ={
            id: user._id,
        }
        this.props.makeAdmin(data);
    }
    removeAdminPrivilage(){
        const { user } = this.props;
        let data ={
            id: user._id,
        }
        this.props.removeAdmin(data);
    }
    render(){
        const { user } = this.props;
        return(
            <div className="user_card">
                <div className="name w-25">{user.name}</div>
                <div className="email w-25">{user.email}</div>
                <div className="type w-25">{user.userType}</div>
                {
                    user.userType === "user" &&
                    <div className="btn make_admin" onClick={this.provideAdminPrivilage}>MAKE ADMIN</div> ||
                    user.userType === "admin" &&
                    <div className="btn make_admin" onClick={this.removeAdminPrivilage}>UNSET ADMIN PRIVILEGE</div>
                }
            </div>
        )
    }
}
UserCard.propTypes = {
    makeAdmin: PropTypes.func.isRequired,
    removeAdmin: PropTypes.func.isRequired,
};
export default connect(null, {makeAdmin, removeAdmin})(UserCard);