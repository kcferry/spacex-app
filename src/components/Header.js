import logo from '../img/clover-297753_1280.png'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='container'>
            <div className='navbar'>
                <div className='container flex'>
                    <Link to='/'>
                        <img className="logo" src={logo} alt="" />
                    </Link>
                    <nav>
                        <ul>
                            <Link to='/'>
                                <li>Next Launch</li>
                            </Link>
                            <Link to='/starship'>
                                <li>Starship</li>
                            </Link>
                            <Link to='/roadster'>
                                <li>Starman</li>
                            </Link>
                            <Link to='/mars'>
                                <li>Mars</li>
                            </Link>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Header
