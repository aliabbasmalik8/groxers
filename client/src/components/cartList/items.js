import React, { Component }from 'react'
import { connect } from 'react-redux'
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
const mapStateToProps = state => ({
    cart: state.items.cart,
});
export default connect(mapStateToProps, null)(Items)