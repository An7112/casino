import React from 'react'
import Slider from 'react-slick';
import './slider-sport.css';

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className="slider-action next"
            onClick={onClick}
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
        >
            {"<"}
        </div>
    );
}

function SliderBSlick() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        className: 'slider-sport b',
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

    return (
        <div className='gr-slider'>
            <div className="slider-container">
                <Slider {...settings}>
                    <div className='mcard match-sched-card'>
                        <img src="https://www.m88hl.com/~/static/images/sportsbook/saba_EN.png" class="tile-image" />
                        <div className='info-box'>
                            <button class="button-info-box ">
                                Bet now
                            </button>
                        </div>
                    </div>
                    <div className='mcard match-sched-card'>
                        <img src="https://www.m88hl.com/~/static/images/sportsbook/saba_EN.png" class="tile-image" />
                        <div className='info-box'>
                            <button class="button-info-box ">
                                Bet now
                            </button>
                        </div>
                    </div>
                    <div className='mcard match-sched-card'>
                        <img src="https://www.m88hl.com/~/static/images/sportsbook/saba_EN.png" class="tile-image" />
                        <div className='info-box'>
                            <button class="button-info-box ">
                                Bet now
                            </button>
                        </div>
                    </div>
                    <div className='mcard match-sched-card'>
                        <img src="https://www.m88hl.com/~/static/images/sportsbook/saba_EN.png" class="tile-image" />
                        <div className='info-box'>
                            <button class="button-info-box ">
                                Bet now
                            </button>
                        </div>
                    </div>
                    <div className='mcard match-sched-card'>
                        <img src="https://www.m88hl.com/~/static/images/sportsbook/saba_EN.png" class="tile-image" />
                        <div className='info-box'>
                            <button class="button-info-box ">
                                Bet now
                            </button>
                        </div>
                    </div>
                    <div className='mcard match-sched-card'>
                        <img src="https://www.m88hl.com/~/static/images/sportsbook/saba_EN.png" class="tile-image" />
                        <div className='info-box'>
                            <button class="button-info-box ">
                                Bet now
                            </button>
                        </div>
                    </div>
                    <div className='mcard match-sched-card'>
                        <img src="https://www.m88hl.com/~/static/images/sportsbook/saba_EN.png" class="tile-image" />
                        <div className='info-box'>
                            <button class="button-info-box ">
                                Bet now
                            </button>
                        </div>
                    </div>
                    <div className='mcard match-sched-card'>
                        <img src="https://www.m88hl.com/~/static/images/sportsbook/saba_EN.png" class="tile-image" />
                        <div className='info-box'>
                            <button class="button-info-box ">
                                Bet now
                            </button>
                        </div>
                    </div>
                    
                </Slider>
            </div>
        </div>
    );
}

export default SliderBSlick