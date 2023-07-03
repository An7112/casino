import React from 'react'
import './header.css'

export default function Header() {
    return (
        <div className='header-main'>
            <div className='header-frame left'>
                <a className='header__logo' href='/'>
                    <img src="https://www.m88hl.com/~/static/images/mlogo-desktop.svg" alt="home" />
                </a>
            </div>
            <div className='header-frame'>
                <ul className="header__group-items">
                    <li className="header__item">
                        <a>
                            HOME
                        </a>
                    </li>
                    <li className="header__item">
                        <a>
                            LIVE CASINO
                        </a>
                    </li>
                    <li className="header__item">
                        <a>
                            SPORTS
                        </a>
                    </li>
                    <li className="header__item">
                        <a>
                            ESPORTS
                        </a>
                    </li>
                </ul>
            </div>
            <div className='header-frame right'>
                <div className='header__lang'>
                    <img src="https://www.m88hl.com/~/static/images/icons/flag.en-US.svg" alt="English (MYR)" />
                    <span>English (MYR)</span>
                </div>
                <button className='header__button-auth'>
                    <span>LOGIN</span>
                </button>
                <button className='header__button-auth rigister'>
                    <span>REGISTER</span>
                </button>
            </div>
        </div>
    )
}
