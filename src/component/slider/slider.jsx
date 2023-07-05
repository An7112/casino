import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.css'
import { useDispatch } from 'react-redux';
import { setInternalRouter } from '../../store/reducers';

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="slider-action banner bot next"
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
      className="slider-action banner bot prev"
      onClick={onClick}
    >
      {"<"}
    </div>
  );
}

const SliderComponent = () => {
  const dispatch = useDispatch()
  const [active, setActive] = useState('ALL LIVE CASINO PRODUCTS')

  const ActiceRouter = (router,) => {
    dispatch(setInternalRouter(router))
    setActive(router)
  }

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    appendDots: (dots) => (
      <div>
        <ul className='list-dots'>
          {dots}
        </ul>
      </div>
    ),
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className='top-slider'>
      <div className="slider-container">
        <Slider {...settings}>
          <div className='slide-item'>
            <div className="slider-img-wrapper">
              <img className='slider-img' src="https://www.m88hl.com/~/static/images/sportsbook/banners/watch-laliga-live-non-vip_EN.jpg" />
              <div className="carousel-item-content">
                <img src="https://www.m88hl.com/~/static/images/badge/lucky-draw-laliga-special_EN.svg" className="carousel-icon" />
                <span className="big bold from-tablet-up">
                  WATCH LA LIGA LIVE
                </span>
                <span className="from-tablet-up">
                  WIN AN ALL-EXPENSE PAID TRIP TO SPAIN
                </span>
                <span className="big bold up-to-tablet">
                  FLY TO SPAIN &amp;
                </span>
                <span className="big bold up-to-tablet">
                  WATCH LA LIGA
                </span>
                <button className="button button-primary track-events" data-url="/register" data-tracking-name="Click - Join Now - WATCH LA LIGA LIVE - NON VIP - EN-MYR">
                  JOIN NOW
                </button>
              </div>
            </div>
          </div>
          <div className='slide-item'>
            <div className="slider-img-wrapper">
              <img className='slider-img' src="https://www.m88hl.com/~/static/images/sportsbook/banners/wnba_combine_banner_3_EN.jpg" />
              <div className="carousel-item-content">
                <img src="https://www.m88hl.com/~/static/images/badge/wnba.svg" className="carousel-icon" />
                <span class="big bold">
                  BET ON THESE
                  <br />
                  WNBA GAMES NOW!
                </span>
                <span class="big">
                  06 JULY 2023
                </span>
                <button className="button button-primary track-events" data-url="/register" data-tracking-name="Click - Join Now - WATCH LA LIGA LIVE - NON VIP - EN-MYR">
                  PLAY NOW
                </button>
              </div>
            </div>
          </div>
          <div className='slide-item'>
            <div className="slider-img-wrapper">
              <img className='slider-img' src="https://www.m88hl.com/~/static/images/casino/banners/casino-games-weekly-tournament_EN.jpg" />
              <div className="carousel-item-content">
                <img src="https://www.m88hl.com/~/static/images/badge/leaderboard-100_EN.svg" className="carousel-icon" />
                <span class="big bold">
                  WIN THE BIGGEST SLICE
                </span>
                <span class="big dsc">
                  FROM VND 115,000
                </span>
                <button className="button button-primary track-events" data-url="/register" data-tracking-name="Click - Join Now - WATCH LA LIGA LIVE - NON VIP - EN-MYR">
                  MORE INFO
                </button>
              </div>
            </div>
          </div>
        </Slider>
      </div>

      <div className='list-router'>
        <ul className="router__group-items">
          <li className={
            active === "ALL LIVE CASINO PRODUCTS"
              ? "router__item active"
              : "router__item"}
            onClick={() => ActiceRouter('ALL LIVE CASINO PRODUCTS')}>
            ALL GAME
          </li>
          <li className={
            active === "ALL BACCARAT"
              ? "router__item active"
              : "router__item"} onClick={() => ActiceRouter('ALL BACCARAT')}>
            BACCARAT
          </li>
          <li className={
            active === "ALL SIC BO"
              ? "router__item active"
              : "router__item"} onClick={() => ActiceRouter('ALL SIC BO')}>
            SIC BO
          </li>
          <li className={
            active === "ALL ROULETTE"
              ? "router__item active"
              : "router__item"} onClick={() => ActiceRouter('ALL ROULETTE')}>
            ROULETTE
          </li>
          <li className={
            active === "ALL BLACKJACK"
              ? "router__item active"
              : "router__item"} onClick={() => ActiceRouter('ALL BLACKJACK')}>
            BLACKJACK
          </li>
          <li className={
            active === "ALL DRAGON TIGER"
              ? "router__item active"
              : "router__item"} onClick={() => ActiceRouter('ALL DRAGON TIGER')}>
            DRAGON TIGER
          </li>
          <li className={
            active === "ALL WHEEL SPIN"
              ? "router__item active"
              : "router__item"} onClick={() => ActiceRouter('ALL WHEEL SPIN')}>
            WHEEL SPIN
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SliderComponent;
