import React, { Component } from 'react'
import ReactImageMagnify from 'react-image-magnify';

class ProductMeida extends Component{
    render(){
        return(
            <div className="card product_media_container">
                <ReactImageMagnify {...{
                    smallImage: {
                        alt: 'Wristwatch by Ted Baker London',
                        src: 'https://d224nth7ac0evy.cloudfront.net/catalog/product/cache/ed9f5ebe2a117625f6cd6336daddd764/s/c/scn52-front.jpg',
                        width: 500,
                        height:550,
                    },
                    largeImage: {
                        src: 'https://d224nth7ac0evy.cloudfront.net/catalog/product/cache/ed9f5ebe2a117625f6cd6336daddd764/s/c/scn52-front.jpg',
                        width: 1200,
                        height: 1800
                    }
                }} />
            </div>
        )
    }
}
export default ProductMeida