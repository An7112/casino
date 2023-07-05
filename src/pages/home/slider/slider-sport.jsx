import React from 'react'
import Slider from 'react-slick';
import './slider-sport.css'


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
function SliderSport() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        className: 'slider-sport',
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
                        <div className='flex-row'>
                            <span className='odds-league'>
                                FIFA WOMENS WORLD CUP 2023 (IN AUSTRALIA & NEW ZEALAND)
                            </span>
                            <div className='line'>
                            </div>
                            <span class="odds-date">Jul 20</span>
                        </div>
                        <div className='flex-row'>
                            <div className='row left'>
                                <span class="txt-ellipsis">New Zealand  (W)</span>
                                <span class="txt-ellipsis">Norway  (W)</span>
                            </div>
                            <div className='row right odds-img'>
                                <div>
                                    <img class="homeTeamIcon" src="https://api.mfeedbo.com/api/m88feed/getteamicon/New_Zealand.png" />
                                </div>
                                <div>
                                    <img class="awayTeamIcon" src="https://api.mfeedbo.com/api/m88feed/getteamicon/Norway.png" />
                                </div>
                            </div>
                        </div>
                        <div className='grid-row'>
                            <button className='score-button'>
                                <span className='score-1'>HDP 1.5</span>
                                <span>0.98</span>
                            </button>
                            <button className='score-button'>
                                <span className='score-1'>HDP 1.5</span>
                                <span>0.98</span>
                            </button>
                        </div>
                    </div>
                    <div className='mcard match-sched-card'>
                        <div className='flex-row'>
                            <span className='odds-league'>
                                FIFA WOMENS WORLD CUP 2023 (IN AUSTRALIA & NEW ZEALAND)
                            </span>
                            <div className='line'>
                            </div>
                            <span class="odds-date">Jul 20</span>
                        </div>
                        <div className='flex-row'>
                            <div className='row left'>
                                <span class="txt-ellipsis">New Zealand  (W)</span>
                                <span class="txt-ellipsis">Norway  (W)</span>
                            </div>
                            <div className='row right odds-img'>
                                <div>
                                    <img class="homeTeamIcon" src="https://api.mfeedbo.com/api/m88feed/getteamicon/New_Zealand.png" />
                                </div>
                                <div>
                                    <img class="awayTeamIcon" src="https://api.mfeedbo.com/api/m88feed/getteamicon/Norway.png" />
                                </div>
                            </div>
                        </div>
                        <div className='grid-row'>
                            <button className='score-button'>
                                <span className='score-1'>HDP 1.5</span>
                                <span>0.98</span>
                            </button>
                            <button className='score-button'>
                                <span className='score-1'>HDP 1.5</span>
                                <span>0.98</span>
                            </button>
                        </div>
                    </div>
                    <div className='mcard match-sched-card'>
                        <div className='flex-row'>
                            <span className='odds-league'>
                                FIFA WOMENS WORLD CUP 2023 (IN AUSTRALIA & NEW ZEALAND)
                            </span>
                            <div className='line'>
                            </div>
                            <span class="odds-date">Jul 20</span>
                        </div>
                        <div className='flex-row'>
                            <div className='row left'>
                                <span class="txt-ellipsis">New Zealand  (W)</span>
                                <span class="txt-ellipsis">Norway  (W)</span>
                            </div>
                            <div className='row right odds-img'>
                                <div>
                                    <img class="homeTeamIcon" src="https://api.mfeedbo.com/api/m88feed/getteamicon/New_Zealand.png" />
                                </div>
                                <div>
                                    <img class="awayTeamIcon" src="https://api.mfeedbo.com/api/m88feed/getteamicon/Norway.png" />
                                </div>
                            </div>
                        </div>
                        <div className='grid-row'>
                            <button className='score-button'>
                                <span className='score-1'>HDP 1.5</span>
                                <span>0.98</span>
                            </button>
                            <button className='score-button'>
                                <span className='score-1'>HDP 1.5</span>
                                <span>0.98</span>
                            </button>
                        </div>
                    </div>
                    <div className='mcard match-sched-card'>
                        <div className='flex-row'>
                            <span className='odds-league'>
                                FIFA WOMENS WORLD CUP 2023 (IN AUSTRALIA & NEW ZEALAND)
                            </span>
                            <div className='line'>
                            </div>
                            <span class="odds-date">Jul 20</span>
                        </div>
                        <div className='flex-row'>
                            <div className='row left'>
                                <span class="txt-ellipsis">New Zealand  (W)</span>
                                <span class="txt-ellipsis">Norway  (W)</span>
                            </div>
                            <div className='row right odds-img'>
                                <div>
                                    <img class="homeTeamIcon" src="https://api.mfeedbo.com/api/m88feed/getteamicon/New_Zealand.png" />
                                </div>
                                <div>
                                    <img class="awayTeamIcon" src="https://api.mfeedbo.com/api/m88feed/getteamicon/Norway.png" />
                                </div>
                            </div>
                        </div>
                        <div className='grid-row'>
                            <button className='score-button'>
                                <span className='score-1'>HDP 1.5</span>
                                <span>0.98</span>
                            </button>
                            <button className='score-button'>
                                <span className='score-1'>HDP 1.5</span>
                                <span>0.98</span>
                            </button>
                        </div>
                    </div>
                    <div className='mcard match-sched-card'>
                        <div className='flex-row'>
                            <span className='odds-league'>
                                FIFA WOMENS WORLD CUP 2023 (IN AUSTRALIA & NEW ZEALAND)
                            </span>
                            <div className='line'>
                            </div>
                            <span class="odds-date">Jul 20</span>
                        </div>
                        <div className='flex-row'>
                            <div className='row left'>
                                <span class="txt-ellipsis">New Zealand  (W)</span>
                                <span class="txt-ellipsis">Norway  (W)</span>
                            </div>
                            <div className='row right odds-img'>
                                <div>
                                    <img class="homeTeamIcon" src="https://api.mfeedbo.com/api/m88feed/getteamicon/New_Zealand.png" />
                                </div>
                                <div>
                                    <img class="awayTeamIcon" src="https://api.mfeedbo.com/api/m88feed/getteamicon/Norway.png" />
                                </div>
                            </div>
                        </div>
                        <div className='grid-row'>
                            <button className='score-button'>
                                <span className='score-1'>HDP 1.5</span>
                                <span>0.98</span>
                            </button>
                            <button className='score-button'>
                                <span className='score-1'>HDP 1.5</span>
                                <span>0.98</span>
                            </button>
                        </div>
                    </div>
                    <div className='mcard match-sched-card'>
                        <div className='flex-row'>
                            <span className='odds-league'>
                                FIFA WOMENS WORLD CUP 2023 (IN AUSTRALIA & NEW ZEALAND)
                            </span>
                            <div className='line'>
                            </div>
                            <span class="odds-date">Jul 20</span>
                        </div>
                        <div className='flex-row'>
                            <div className='row left'>
                                <span class="txt-ellipsis">New Zealand  (W)</span>
                                <span class="txt-ellipsis">Norway  (W)</span>
                            </div>
                            <div className='row right odds-img'>
                                <div>
                                    <img class="homeTeamIcon" src="https://api.mfeedbo.com/api/m88feed/getteamicon/New_Zealand.png" />
                                </div>
                                <div>
                                    <img class="awayTeamIcon" src="https://api.mfeedbo.com/api/m88feed/getteamicon/Norway.png" />
                                </div>
                            </div>
                        </div>
                        <div className='grid-row'>
                            <button className='score-button'>
                                <span className='score-1'>HDP 1.5</span>
                                <span>0.98</span>
                            </button>
                            <button className='score-button'>
                                <span className='score-1'>HDP 1.5</span>
                                <span>0.98</span>
                            </button>
                        </div>
                    </div>
                    <div className='mcard match-sched-card'>
                        <div className='flex-row'>
                            <span className='odds-league'>
                                FIFA WOMENS WORLD CUP 2023 (IN AUSTRALIA & NEW ZEALAND)
                            </span>
                            <div className='line'>
                            </div>
                            <span class="odds-date">Jul 20</span>
                        </div>
                        <div className='flex-row'>
                            <div className='row left'>
                                <span class="txt-ellipsis">New Zealand  (W)</span>
                                <span class="txt-ellipsis">Norway  (W)</span>
                            </div>
                            <div className='row right odds-img'>
                                <div>
                                    <img class="homeTeamIcon" src="https://api.mfeedbo.com/api/m88feed/getteamicon/New_Zealand.png" />
                                </div>
                                <div>
                                    <img class="awayTeamIcon" src="https://api.mfeedbo.com/api/m88feed/getteamicon/Norway.png" />
                                </div>
                            </div>
                        </div>
                        <div className='grid-row'>
                            <button className='score-button'>
                                <span className='score-1'>HDP 1.5</span>
                                <span>0.98</span>
                            </button>
                            <button className='score-button'>
                                <span className='score-1'>HDP 1.5</span>
                                <span>0.98</span>
                            </button>
                        </div>
                    </div>

                    <div className='mcard match-sched-card'>
                        <div className='flex-row'>
                            <span className='odds-league'>
                                FIFA WOMENS WORLD CUP 2023 (IN AUSTRALIA & NEW ZEALAND)
                            </span>
                            <div className='line'>
                            </div>
                            <span class="odds-date">Jul 20</span>
                        </div>
                        <div className='flex-row'>
                            <div className='row left'>
                                <span class="txt-ellipsis">New Zealand  (W)</span>
                                <span class="txt-ellipsis">Norway  (W)</span>
                            </div>
                            <div className='row right odds-img'>
                                <div>
                                    <img class="homeTeamIcon" src="https://api.mfeedbo.com/api/m88feed/getteamicon/New_Zealand.png" />
                                </div>
                                <div>
                                    <img class="awayTeamIcon" src="https://api.mfeedbo.com/api/m88feed/getteamicon/Norway.png" />
                                </div>
                            </div>
                        </div>
                        <div className='grid-row'>
                            <button className='score-button'>
                                <span className='score-1'>HDP 1.5</span>
                                <span>0.98</span>
                            </button>
                            <button className='score-button'>
                                <span className='score-1'>HDP 1.5</span>
                                <span>0.98</span>
                            </button>
                        </div>
                    </div><div className='mcard match-sched-card'>
                        <div className='flex-row'>
                            <span className='odds-league'>
                                FIFA WOMENS WORLD CUP 2023 (IN AUSTRALIA & NEW ZEALAND)
                            </span>
                            <div className='line'>
                            </div>
                            <span class="odds-date">Jul 20</span>
                        </div>
                        <div className='flex-row'>
                            <div className='row left'>
                                <span class="txt-ellipsis">New Zealand  (W)</span>
                                <span class="txt-ellipsis">Norway  (W)</span>
                            </div>
                            <div className='row right odds-img'>
                                <div>
                                    <img class="homeTeamIcon" src="https://api.mfeedbo.com/api/m88feed/getteamicon/New_Zealand.png" />
                                </div>
                                <div>
                                    <img class="awayTeamIcon" src="https://api.mfeedbo.com/api/m88feed/getteamicon/Norway.png" />
                                </div>
                            </div>
                        </div>
                        <div className='grid-row'>
                            <button className='score-button'>
                                <span className='score-1'>HDP 1.5</span>
                                <span>0.98</span>
                            </button>
                            <button className='score-button'>
                                <span className='score-1'>HDP 1.5</span>
                                <span>0.98</span>
                            </button>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default SliderSport;