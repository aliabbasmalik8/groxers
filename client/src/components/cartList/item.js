import React, { Component } from 'react'
class Item extends Component{
    render(){
        const { item } = this.props;
        return(
            <div className="item_banner row">
                <div className="image_parent col-2">
                    <img src={item && item.product && item.product.images && item.product.images[0]} alt="" />
                </div>
                <div className="desc col-7">
                    <div className="name">
                        {item.product.name}
                    </div>
                    <div className="description">
                        {item.product.description}
                    </div>
                </div>
                <div className="price col-1">
                    {item.product.skus[0].price}
                </div>
                <div className="qty col-1">
                    {item.quantity}
                </div>
                <div className="total col-1">
                    {item.total}
                </div>
            </div>
        )
    }
}
export default Item;