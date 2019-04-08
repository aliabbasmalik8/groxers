import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../api/authApi";
import PageHeader from './../dashboard/PageHeader'
import './auth.scss'
class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }
  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/"); // push user to dashboard when they login
    }
    if (nextProps.errors) {
        this.setState({
          errors: nextProps.errors
      });
    }
  }
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value })
  };
  onSubmit = e => {
    e.preventDefault();
    const userData = {
          email: this.state.email,
          password: this.state.password
        };
    this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
  };
  render() {
    const { errors } = this.state;
    return (
      <div>
        <PageHeader />
        <div className="container auth_container">
          <div className="login_title">LOGIN</div>
          <div className="auth">            
            <div className={"error_list " + (Object.keys(errors).length > 0 ? 'error_list_padding' : '')}>
              <div className="">{errors.email}</div>
              <div className="">{errors.emailnotfound}</div>
              <div className="">{errors.password}</div>
              <div className="">{errors.passwordincorrect}</div>
            </div>
            <div className="input_parent">
              <input onChange={this.onChange} id="email" type="email" value={this.state.email} placeholder="Enter your email"/>
            </div>
            <div className="input_parent">
              <input onChange={this.onChange} id="password" type="password" value={this.state.password} placeholder="Enter your password"/>
            </div>
            <div className="login_btn" onClick={this.onSubmit}>login</div> 
          </div>
        </div>
      </div>
    );
  }
}
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(mapStateToProps,{ loginUser })(Login);