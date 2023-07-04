import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.css'
import { useDispatch } from 'react-redux';
import { setInternalRouter } from '../../store/reducers';
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red"}}
      onClick={onClick}
    />
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
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
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
