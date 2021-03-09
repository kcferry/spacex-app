import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className='footer-box'>
                <div className='footer-content'>
                    <ul className='footer-menu'>
                        <li>
                            <a className='footer-links' href="https://www.linkedin.com/in/kyle-ferry-2bb160112/"> <i className="fab fa-linkedin"></i></a>
                        </li>
                        <li>
                            <a className='footer-links' href="https://twitter.com/Kvferry"> <i className="fab fa-twitter"></i></a>
                        </li>
                        <li>
                            <a className='footer-links' href="https://github.com/kcferry"> <i className="fab fa-github"></i></a>
                        </li>
                    </ul>
                    <h5 className='footer-lic'>Space Clover © 2021 by Kyle Ferry is licensed under CC BY-NC 4.0  <br/> This site doesn't have any relations with Space Exploration Technologies Corp. (SpaceX) </h5>
                </div>
            </div>
        </footer>
    )
}

export default Footer
