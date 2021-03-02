import { Link } from 'react-router-dom'
import vid from '../../img/landingVid.mp4'
import logo from '../../img/clover-297753_1280.png'

const LandingPage = () => {
    return (
        <>
            <div className='full-screen-video-container'>
                <video muted loop playsInline autoPlay>
                    <source src={vid} type='video/mp4' />
                </video>
                <div className='full-screen-video-content'>
                    <img src={logo} alt="" />

                    <Link to='/next-launch'>
                        <div className="">
                            <button className='title'><span className='btn-text'>Launch</span></button>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default LandingPage
