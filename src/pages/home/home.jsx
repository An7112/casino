import React, { useEffect, useState } from 'react'
import './home.css'
import SliderComponent from '../../component/slider/slider'
import { useSelector } from 'react-redux';
import AllGame from './all-game/all-game';
import SliderSport from './slider/slider-sport';
import SliderBSlick from './slider/slider-b-slick';
import CasinoSlider from './slider/casino-slider';
import FilterProvider from './filter-provider/filter-provider';

function Home() {
    const { internalRouter } = useSelector((state) => state);
    const [component, setComponent] = useState(null);

    useEffect(() => {
        switch (internalRouter) {
            case 'ALL LIVE CASINO PRODUCTS':
                setComponent(<AllGame />);
                break;
            case 'View':
                setComponent(<AllGame />);
                break;
            default:
                setComponent(<AllGame />);
                break;
        }
    }, [internalRouter]);

    return (
        <>
            <div className='page-main'>
                <SliderComponent />
                <div className='page__table'>
                    <h1 className='page__title bd'>{internalRouter}</h1>
                    {component}
                </div>
                <div style={{ backgroundColor: 'white' }} >
                    <div className='page__table'>
                        <div className='area sportsbook-section'>
                            <div className='title-component'>
                                <div className='flex-row'>
                                    <span className='title'>
                                        Sports
                                    </span>
                                    <a class="track-events" href="/sportsbook">
                                        <span>See All Products</span>
                                        <div class="mask"></div>
                                    </a>
                                </div>
                            </div>
                            <div className='odds-component'>
                                <div className='odds-cards-wrap'>
                                    {/* Button */}
                                    <div className='area' id='sports-highlight'>
                                        <SliderSport />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* New */}
                <div style={{ backgroundColor: 'white' }} >
                    <div className='banner custom'>
                    <img className='logo-banner' src='/media/logo-banner.jpg' />
                        <div className='cards top'>
                            <h3 className='card-title'>Lorem - Lorem</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                            <button className='button-info-box bt-card'>
                                Play Now
                            </button>
                        </div>
                    </div>
                </div>
                <div className='page__table'>
                    <SliderBSlick />
                </div>
                <div style={{ backgroundColor: '#222939' }} >
                    <div className='page__table'>
                        <div className='area sportsbook-section'>
                            <div className='title-component'>
                                <div className='flex-row'>
                                    <span className='title' style={{ color: 'white', marginBottom: '32px' }}>
                                        LIVE CASINO
                                    </span>
                                    <img src="https://www.m88hl.com/~/static/images/home-page/live-casino-title-image.png" className='title-image' />
                                    <a class="track-events" href="/sportsbook">
                                        <span>See All Products</span>
                                        <div class="mask"></div>
                                    </a>
                                </div>
                                <div className='grid-table'>
                                    <div className='grid-item'>
                                        <img src="https://www.m88hl.com/~/static/images/live-casino/club_en-US.png" class="tile-image" />
                                        <div className='item__info-box'>
                                            <button className='button-info-box'>
                                                Play Now
                                            </button>
                                            <div className='info-box__right'>
                                                <img className='box-right-img' src='https://www.m88hl.com/~/static/images/icons/icon-baccarat.svg' />
                                                <span>10</span>
                                                <img className='box-right-img' src='https://www.m88hl.com/~/static/images/icons/icon-sicbo.svg' />
                                                <span>3</span>
                                                <img className='box-right-img' src='https://www.m88hl.com/~/static/images/icons/icon-roulette.svg' />
                                                <span>2</span>
                                                <img className='box-right-img' src='https://www.m88hl.com/~/static/images/icons/icon-dragontiger.svg' />
                                                <span>1</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='grid-item'>
                                        <img src="https://www.m88hl.com/~/static/images/live-casino/sexygaminglivedealer_en-US.png" class="tile-image" />
                                        <div className='item__info-box'>
                                            <button className='button-info-box'>
                                                Play Now
                                            </button>
                                            <div className='info-box__right'>
                                                <img className='box-right-img' src='https://www.m88hl.com/~/static/images/icons/icon-baccarat.svg' />
                                                <span>10</span>
                                                <img className='box-right-img' src='https://www.m88hl.com/~/static/images/icons/icon-sicbo.svg' />
                                                <span>3</span>
                                                <img className='box-right-img' src='https://www.m88hl.com/~/static/images/icons/icon-roulette.svg' />
                                                <span>2</span>
                                                <img className='box-right-img' src='https://www.m88hl.com/~/static/images/icons/icon-dragontiger.svg' />
                                                <span>1</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='page__table'>
                        <SliderBSlick />
                    </div>
                </div>
                <div style={{ backgroundColor: 'white' }} >
                    <div className='page__table'>
                        <div className='area sportsbook-section'>
                            <div className='title-component'>
                                <div className='flex-row'>
                                    <span className='title'>
                                        CASINO
                                    </span>
                                    <a class="track-events" href="/sportsbook">
                                        <span>See All Games</span>
                                        <div class="mask"></div>
                                    </a>
                                </div>
                            </div>
                            <CasinoSlider />
                        </div>
                    </div>
                </div>
                <div style={{ backgroundColor: 'white', paddingBottom: '28px' }}>
                    <div className='page__table'>
                        <div className='area sportsbook-section'>
                            <div className='title-component'>
                                <div className='flex-row'>
                                    <span className='title'>
                                        FILTER BY PROVIDER
                                    </span>
                                </div>
                            </div>
                            <FilterProvider />
                        </div>
                    </div>
                </div>
                <div style={{ backgroundColor: '#f4f4f5' }} >
                    <div className='page__table'>
                        <div className='area sportsbook-section banner'>
                            <img src="https://www.m88hl.com/~/static/images/home-page/mobile-download_EN.png" class="mobile-download-image absolute ml-16" />
                            <div className='frame-banner'>
                                <div className='flex-row'>
                                    <div class="d-flex flex-column">
                                        <span class="uppercase">
                                            M88 APP! Play anytime, anywhere
                                        </span>
                                        <span class="uppercase color-secondary">
                                            Download for free now!
                                        </span>
                                    </div>
                                    <div className='flex-no-between'>
                                        <img src="https://www.m88hl.com/~/static/images/home-page/mobile-android.svg" />
                                        <img src="https://www.m88hl.com/~/static/images/home-page/mobile-apple.svg" />
                                        <button className='button-tab-submmit update grid'>
                                            DOWNLOAD NOW
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home