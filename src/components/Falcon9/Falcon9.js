import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

import falc9 from '../../img/falcon-9-spacex-falcon-9-png-414_5414.png'

const Falcon9 = () => {
    return (
        <>
            <Header />
            <section className='showcase'>
                <div className='container grid'>
                    <h1>falc9</h1>
                    <img className='rocket-img' src={falc9} alt="Falcon 9" />
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Falcon9
