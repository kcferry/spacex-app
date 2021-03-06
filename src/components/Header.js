import React, { useState } from 'react'
import logo from '../img/clover-297753_1280.png'
import { Link } from 'react-router-dom'
import { MenuItems } from './MenuItems'

const Header = () => {
    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(!clicked)
    }

    return (
        <header>
            <nav>
                <div className='nav-logo'>
                    <Link to='/'>
                        <img className='header-logo' src={logo} alt="" />
                    </Link>
                </div>

                <div className='menu-icon' onClick={handleClick} >
                    <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>

                <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index} onClick={handleClick}><Link to={item.url} className={item.cName}><span className='title'>{item.title}</span></Link></li>
                        )
                    })}
                </ul>
            </nav>

        </header>
    )
}

export default Header

