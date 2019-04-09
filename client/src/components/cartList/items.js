import React, { Component }from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from "react-router-dom";
import Item from './item'
class Items extends Component{
    render(){
        const { cart } = this.props;
        return(
            <div className="container items">
                <Header/>
                {
                    cart.map((item, index)=>{
                        return <Item key={index} item={item} />
                    })
                }
                <GrandTotal total={this.props.total}/>
                <div className="checkout_banner row">
                    <Link to={"/"}>
                        <div className="btn continue_shopping">CONTINUE SHOPPING</div>
                    </Link>
                    <Link to={"/checkout/address"}>
                        <div className="btn btn1">CHECKOUT</div>
                    </Link>
                </div>
            </div>
        )
    }
}
function Header(props){
    return(
        <div className="header row">
            <div className="col-9">
                Item
            </div>
            <div className="col-1">
                Price
            </div>
            <div className="col-1">
                Qty
            </div>
            <div className="col-1">
                Total
            </div>
        </div>
    )
}
function GrandTotal(props){
    const { total } = props;
    return(
        <div className="grand_total row">
            {'Total: PKR ' + total }
        </div>
    )
}
const mapStateToProps = state => ({
    cart: state.items.cart,
    total: state.items.total,
});
export default connect(mapStateToProps, null)(withRouter(Items))