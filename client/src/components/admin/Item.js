import React, { Component } from 'react'
class Item extends Component{
    render(){
        const { item } = this.props;
        return(
            item &&
            <a href={item.product.url} target="_blank" className="single_item">
                <div  className="pid">{item.product.pid}</div>
                <div className="name">{item.product.name}</div>
                <div className="source">{item.product.source}</div>
                <div className="price">{item.product.skus[0].price}</div>
                <div className="quantity">{item.quantity}</div>
                <div className="total">{item.total}</div>
            </a>
        )
    }
}
export default Item;