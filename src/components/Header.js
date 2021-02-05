import logo from '../img/1594px-SpaceX_Logo_Black.png'

const Header = () => {
    return (
        <div className='navbar'>
            <div className='container flex'>
                <img className="logo" src={logo} alt="" />
                <nav>
                    <ul>
                        <li>Next Launch</li>
                        <li>Starship</li>
                        <li>Starman</li>
                        <li>Mars</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header
