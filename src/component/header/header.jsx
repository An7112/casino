import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom';
import './header.css'
import { linkList } from '../../links/links';

export default function Header() {
    return (
        <div className='frame-header'>
            <div className='header-main'>
                <div className='header-frame left'>
                    <a className='header__logo' href='/'>
                        <img src="https://www.m88hl.com/~/static/images/mlogo-desktop.svg" alt="home" />
                    </a>
                </div>
                <div className='header-frame'>
                    <ul className="header__group-items">
                        {linkList.map((item) => (
                            <NavLink
                                to={`/${item.link}`}
                                key={item.name}
                                style={({ isActive }) => ({
                                    color: isActive ? '#caab72' : 'white'
                                })}
                                className='nav-link'
                            >
                                <li className="header__item">
                                    <span>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</span>
                                </li>
                            </NavLink>
                        ))}
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
                    <Link className='user-info' to={'user-info'}>
                        <FaUserCircle />
                    </Link>
                </div>
            </div>
        </div>
    )
}
