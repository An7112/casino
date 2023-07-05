import React from 'react'
import Slider from 'react-slick';
import './slider-sport.css';

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className="slider-action next"
            onClick={onClick}
            style={{ top: '40%' }}
        >
            {">"}
        </div>
    );
}
function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            className="slider-action prev"
            onClick={onClick}
            style={{ top: '40%' }}
        >
            {"<"}
        </div>
    );
}

function CasinoSlider() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 6,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        className: 'slider-sport b no-scale',
        centerMode: true,
        centerPadding: '16px',
        appendDots: (dots) => (
            <div>
                <ul style={{ display: 'none' }}>{dots}</ul>
            </div>
        ),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 566,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const showDataByList = [1, 2, 3, 4, 6, 7, 8, 9, 10]

    return (
        <div className='gr-slider'>
            <div className="slider-container">
                <Slider {...settings}>
                    {showDataByList.map((element) => (
                        <div className='mcard match-sched-card'>
                            <div className='frame-img-scale'>
                                <img src="https://www.m88hl.com/~/static/images/casino/games/1/EN/52000006.jpg" class="tile-image" />
                                <div class="overlay">
                                    <button className='overlay-button bg'>PLAY NOW</button>
                                    <button className='overlay-button'>DEMO MODE</button>
                                </div>
                            </div>
                            <div className='content-bottom'>
                                <img class="icon-provider" src="https://www.m88hl.com/~/static/images/icons/icon-provider-VIVA.svg" />
                                <span>Jewel of the Stars Jackpot</span>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default CasinoSlider