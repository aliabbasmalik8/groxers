import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../api/authApi";
import PageHeader from './../dashboard/PageHeader'
class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
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
      if (nextProps.errors) {
        this.setState({
          errors: nextProps.errors
        });
      }
  }
  onChange = e => {
      this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    this.props.registerUser(newUser, this.props.history); 
  };
  render() {
    const { errors } = this.state;
    return (
      <div>
        <PageHeader />
        <div className="container auth_container">
          <div className="login_title">CREATE NEW CUSTOMER ACCOUNT</div>
          <div className="auth">            
            <div className={"error_list " + (Object.keys(errors).length > 0 ? 'error_list_padding' : '')}>
              <div className="">{errors.name}</div>
              <div className="">{errors.email}</div>
              <div className="">{errors.password}</div>
              <div className="">{errors.password2}</div>
            </div>
            <div className="input_parent">
              <input onChange={this.onChange} id="name" type="text" value={this.state.name} placeholder="Name"/>
            </div>
            <div className="input_parent">
              <input onChange={this.onChange} id="email" type="email" value={this.state.email} placeholder="Email"/>
            </div>
            <div className="input_parent">
              <input onChange={this.onChange} id="password" type="password" value={this.state.password} placeholder="Password"/>
            </div>
            <div className="input_parent">
              <input onChange={this.onChange} id="password2" type="password" value={this.state.password2} placeholder="Confirm Password"/>
            </div>
            <div className="login_btn" onClick={this.onSubmit}>Sign up</div> 
          </div>
        </div>
      </div>
    );
  }
}
Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(mapStateToProps,{ registerUser })(withRouter(Register));