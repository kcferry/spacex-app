import React, { useState } from 'react'
import logo from '../img/clover-297753_1280.png'
import { Link } from 'react-router-dom'


const Header = () => {
    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        const onOff = clicked
        setClicked(!onOff)
    }

    return (
        <nav className='main-header'>
            <div className='nav-logo'>
                <Link to='/'>
                    <img src={logo} alt="" />
                </Link>
            </div>

            <div className='menu-icon' onClick={handleClick} >
                <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>

            <ul className='nav-links'>
                <Link className='nav-link' to='/'>
                    <li className='nav-li'>Next Launch</li>
                </Link>
                <Link className='nav-link' to='/starship'>
                    <li className='nav-li'>Starship</li>
                </Link>
                <Link className='nav-link' to='/roadster'>
                    <li className='nav-li'>Starman</li>
                </Link>
                <Link className='nav-link' to='/mars'>
                    <li className='nav-li'>Mars</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Header
