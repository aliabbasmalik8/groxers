import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux";
import { logoutUser } from "../../api/authApi"
import PageHeader from './PageHeader'
import SlickSlider from './SlickSlider'
import ProductsCatagories from './ProductsCatagories'
import Footer from './Footer';
import './styles.scss'

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    return (
      <div className="dashboard_container">
        <PageHeader />
        <SlickSlider />
        <ProductsCatagories />
        <Footer />
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