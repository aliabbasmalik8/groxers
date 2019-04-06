import React, { Component } from 'react'
import ReactImageMagnify from 'react-image-magnify';

class ProductMeida extends Component{
    render(){
        const { product } = this.props;
        return(
            <div className="card product_media_container col-6">
                <ReactImageMagnify {...{
                    smallImage: {
                        alt: 'Wristwatch by Ted Baker London',
                        src: product && product.images && product.images[0],
                        width: 500,
                        height:550,
                    },
                    largeImage: {
                        src: product && product.images && product.images[0],
                        width: 1200,
                        height: 1800
                    }
                }} />
            </div>
        )
    }
}
export default ProductMeida