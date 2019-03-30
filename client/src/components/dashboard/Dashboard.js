import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../api/authApi";

import './styles.scss'

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    return (
      <div className="dashboard_container">

      </div>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  auth: state.auth && state.auth
});
export default connect(mapStateToProps,{ logoutUser })(Dashboard);