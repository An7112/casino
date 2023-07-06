import React from 'react'
import Slider from 'react-slick';
import './slider-sport.css'

function SliderSport() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <div className='gr-slider'>
            <div className="slider-container single">
                <Slider {...settings}>
                    <div className='cards-wrap'>
                        <div className='cards-wrap-absolute'>
                            <h3 className='card-title'>Lorem - Lorem</h3>
                            <p>Lorem Ipsum is simply dummy.</p>
                        </div>
                    </div>
                    <div className='cards-wrap'>
                        <div className='cards-wrap-absolute'>
                            <h3 className='card-title'>Lorem - Lorem</h3>
                            <p>Lorem Ipsum is simply dummy.</p>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default SliderSport;