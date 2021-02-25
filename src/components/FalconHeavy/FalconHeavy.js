import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

import falcHeavy from '../../img/falconHeavy.png'

const FalconHeavy = () => {
    return (
        <>
        <Header />
        <section className='showcase'>
            <div className='container grid'>
                <h1>falcon Heavy</h1>
                <img className='rocket-img' src={falcHeavy} alt="Falcon 9" />
            </div>
        </section>
        <Footer />
    </>
    )
}

export default FalconHeavy
