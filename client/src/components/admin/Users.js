import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAllUsers } from './../../api/productApi'
import UserCard from './userCard'
class Users extends Component{
    componentDidMount(){
        this.props.getAllUsers();
    }
    render(){
        const { users } = this.props;
        return(
            <div className="_users container">
            <div className="user_card">
                <div className="name w-25 title">NAME</div>
                <div className="email w-25 title">EMAIL</div>
                <div className="type w-25 title">USER TYPE</div>
                <div className="title">ACTION</div>
            </div>
            { 
                users.map((user)=>{
                    return <UserCard user={user}/>
                })
            }
            </div>
        )
    }
}
Users.propTypes = {
    getAllUsers: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
    users: state.admin.users,
});
export default connect(mapStateToProps, {getAllUsers})(Users);