import React, { Component } from 'react'
class Item extends Component{
    render(){
        const { item } = this.props;
        return(
            item &&
            <div className="single_item">
                <div className="name">{item.product.name}</div>
                <div className="price">{item.product.skus[0].price}</div>
                <div className="quantity">{item.quantity}</div>
                <div className="total">{item.total}</div>
            </div>
        )
    }
}
export default Item;