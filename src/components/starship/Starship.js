import Header from '../Header'
import Footer from '../Footer'
import starship from '../../img/SS.png'

const Starship = () => {
    return (
        <>
            <Header />
            <section className='showcase'>
                <div className='container grid'>
                    <h1>Starship</h1>
                    <img className='rocket-img' src={starship} alt="Falcon 9" />
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Starship
