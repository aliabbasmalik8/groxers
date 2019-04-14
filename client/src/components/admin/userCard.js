import React, { Component } from 'react'
class UserCard extends Component{
    render(){
        const { user } = this.props;
        return(
            <div className="user_card">
                <div className="name w-25">{user.name}</div>
                <div className="email w-25">{user.email}</div>
                <div className="type w-25">{user.userType}</div>
                <div className="btn make_admin">MAKE ADMIN</div>
            </div>
        )
    }
}
export default UserCard;