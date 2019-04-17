import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { changePasswordApi } from './../../api/authApi'
import PageHeader from './../dashboard/PageHeader'
class ChangePassword extends Component{
    constructor() {
        super();
        this.state = {
          email: "",
          password: "",
          newPassword: "",
          errors: {}
        };
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
              errors: nextProps.errors
          });
        }
      }
    onChange = e => {
        this.setState({ 
            [e.target.id]: e.target.value,
        })
    };
    onSubmit = e => {
        e.preventDefault();
        const { email, password, newPassword } = this.state;
        const userData = {
          email: this.state.email,
          password: this.state.password,
          newPassword: this.state.newPassword,
        };
        let errors = {};
        if(email === ""){
            errors.email = "email must be required";
        }
        if(password === ""){
            errors.password = "password must be required";
        }
        if(newPassword === ""){
            errors.newPassword = "new password must be required";
        }
        this.setState({errors: errors})
        if(email !== "" && password !== "" && newPassword !== ""){
            this.props.changePasswordApi(userData, this.props.history);
        }
    };
    render(){
        const { errors } = this.state;
        return (
            <div>
              <PageHeader />
              <div className="container auth_container">
                <div className="login_title">CHANGE PASSWORD</div>
                <div className="auth">            
                  <div className={"error_list " + (Object.keys(errors).length > 0 ? 'error_list_padding' : '')}>
                    <div className="">{errors.email}</div>
                    <div className="">{errors.password}</div>
                    <div className="">{errors.newPassword}</div>
                  </div>
                  <div className="input_parent">
                    <input onChange={this.onChange} id="email" type="email" value={this.state.email} placeholder="Enter your email"/>
                  </div>
                  <div className="input_parent">
                    <input onChange={this.onChange} id="password" type="password" value={this.state.password} placeholder="Enter your password"/>
                  </div>
                  <div className="input_parent">
                    <input onChange={this.onChange} id="newPassword" type="password" value={this.state.newPassword} placeholder="Enter your new password"/>
                  </div>
                  <div className="login_btn" onClick={this.onSubmit}>Change Password</div> 
                </div>
              </div>
            </div>
        );
    }
}
ChangePassword.propTypes = {
    changePasswordApi: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});
export default connect(mapStateToProps,{ changePasswordApi })(ChangePassword);