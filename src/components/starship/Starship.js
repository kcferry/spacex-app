import Header from '../Header'
import Footer from '../Footer'
import starship from '../../img/SS.png'

const Starship = () => {
    return (
        <>
            <Header />
            <section className='showcase-vehicle'>
                <div className='container-vehicle-flex'>
                    <div className='vechicle-info-box'>
                        <h1>STARSHIP</h1>
                    </div>
                    <div className='vechicle-img-box'>
                        <img className='rock-img' src={starship} alt="Falcon 9" />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Starship
