import React from 'react'
import { userLink } from '../../../../links/links'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div style={{ backgroundColor: 'white' }}>
            <div className='page__table'>
                <div className='list-link-user'>
                    <ul className="header__group-items profile">
                        {userLink.map((item) => (
                            <NavLink
                                to={`/${item.link}`}
                                key={item.name}
                                style={({ isActive }) => ({
                                    borderBottom: isActive ? "2px solid #caab72" : "",
                                    color: isActive ? '#caab72' : '#90949c'
                                })}
                                className='nav-link'
                            >
                                <li className="header__item user-url">
                                    {item.icon}
                                    <span>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</span>
                                </li>
                            </NavLink>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar