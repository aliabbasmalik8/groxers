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
                    <img src="https://d224nth7ac0evy.cloudfront.net/codazon/slideshow/cache/1900x600/1/9/1900x600.jpg" alt=""/>
                </div>
                <div>
                    <img src="https://d224nth7ac0evy.cloudfront.net/codazon/slideshow/cache/1900x600/1/9/1900x600.jpg" alt=""/>
                </div>
                <div>
                    <img src="https://d224nth7ac0evy.cloudfront.net/codazon/slideshow/cache/1900x600/1/9/1900x600.jpg" alt=""/>
                </div>
                <div>
                    <img src="https://d224nth7ac0evy.cloudfront.net/codazon/slideshow/cache/1900x600/1/9/1900x600.jpg" alt=""/>
                </div>
                </Slider>
            </div>
        )
    }
}
export default SlickSlider;