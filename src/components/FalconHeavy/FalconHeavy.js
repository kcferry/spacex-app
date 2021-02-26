import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

import falcHeavy from '../../img/falconHeavy.png'

const FalconHeavy = () => {
    return (
        <>
            <Header />
            <section className='showcase-vehicle'>
                <div className='container-vehicle-flex'>
                    <div className='vechicle-info-box'>
                        <h1>FALCON HEAVY</h1>
                    </div>
                    <div className='vechicle-img-box'>
                        <img className='rock-img' src={falcHeavy} alt="Falcon 9" />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default FalconHeavy
