import logo from '../img/1594px-SpaceX_Logo_Black.png'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='container'>
            <div className='navbar'>
                <div className='container flex'>
                    <img className="logo" src={logo} alt="" />
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
