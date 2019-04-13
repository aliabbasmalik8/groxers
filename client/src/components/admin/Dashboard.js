import React, { Component } from 'react'
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import PropTypes from "prop-types";
import { connect } from "react-redux";

import DeliverOrder from './DeliverOrder'
import PendingOrder from './PendingOrder'
import FullfileOrder from './FullfilOrder'
import Users from './Users'

import { getAllOrders } from './../../api/productApi'

import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './dashboard.scss'

class AdminDashboard extends Component{
    constructor(props){
        super(props);
        this.state={activeTab: 'pending-order'}
    }
    componentDidMount(){
        this.props.getAllOrders();
    }
    render(){
        const { activeTab } = this.state;
        const { admin } = this.props;
        return(
            <div className="admin_dashbord_banner">
                <SideNav
                    onSelect={(selected) => {
                        this.setState({activeTab: selected})
                    }}
                >
                    <SideNav.Toggle />
                    <SideNav.Nav defaultSelected="home">
                        { /*<NavItem eventKey="home">
                            <NavIcon>
                                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                Home
                            </NavText>
                        </NavItem> */}
                        <NavItem eventKey="pending-order">
                            <NavIcon>
                                <i className="fab fa-jedi-order" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                PENDING ORDERS
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="deliver-order">
                            <NavIcon>
                                <i className="fab fa-first-order" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                DELIVERED ORDERS
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="fullfil-order">
                            <NavIcon>
                                <i className="fab fa-first-order-alt" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                FULLFIL ORDERS
                            </NavText>
                        </NavItem>
                    </SideNav.Nav>
                </SideNav>
                {
                    activeTab === 'home' && <Users /> ||
                    activeTab === 'pending-order' && <PendingOrder orders={admin.pendingOrders}/> ||
                    activeTab === 'deliver-order' && <DeliverOrder orders={admin.deliverOrders}/> ||
                    activeTab === 'fullfil-order' && <FullfileOrder orders={admin.deliveredOrders}/>
                }
            </div>
        )
    }
}
AdminDashboard.propTypes = {
    getAllOrders: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
    admin: state.admin,
});
export default connect(mapStateToProps, { getAllOrders })(AdminDashboard);