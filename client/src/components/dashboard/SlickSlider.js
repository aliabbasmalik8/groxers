import React, { Component } from 'react'
import Slider from "react-slick";
class SlickSlider extends Component{
    render(){
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
        return(
            <div className="slider_container">
                <Slider {...settings}>
                <div>
                    <img src="//cdn.shopify.com/s/files/1/0091/1143/7412/files/Mainslider-Desktop-Prints03_1771x800_crop_center.jpg?v=1553860374" alt=""/>
                </div>
                <div>
                    <img src="//cdn.shopify.com/s/files/1/0091/1143/7412/files/Mainslider-Desktop-Kashmir02_1771x800_crop_center.jpg?v=1553492312" alt=""/>
                </div>
                <div>
                    <img src="//cdn.shopify.com/s/files/1/0091/1143/7412/files/Mainslider-Desktop-ChKari03_1771x800_crop_center.jpg?v=1553860444" alt=""/>
                </div>
                </Slider>
            </div>
        )
    }
}
export default SlickSlider;