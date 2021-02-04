import logo from '../img/1594px-SpaceX_Logo_Black.png'

const Header = () => {
    return (
        <div className='navbar'>
            <div className='container'>
                <img className="logo" src={logo} alt="" />
                <nav>
                    <ul>
                        <li>Next Launch</li>
                        <li>Starship</li>
                        <li>Elon's Tesla</li>
                        <li>Mars</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header
