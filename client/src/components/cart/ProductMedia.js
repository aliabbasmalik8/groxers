import React, { Component } from 'react'
import ReactImageMagnify from 'react-image-magnify';
class ProductMeida extends Component{
    render(){
        const { product } = this.props;
        return(
            <div className="card product_media_container col-xs-6 col-md-7">
                <ReactImageMagnify {...{
                    smallImage: {
                        alt: 'Wristwatch by Ted Baker London',
                        src: product && product.images && product.images[0],
                        width: 500,
                        height:550,
                    },
                    largeImage: {
                        src: product && product.images && product.images[0],
                        width: 1300,
                        height: 1800,
                        zIndex: 1,
                    }
                }}
                />
            </div>
        )
    }
}
export default ProductMeida