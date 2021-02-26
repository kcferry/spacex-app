import React, { useState, useEffect } from 'react'
import axios from 'axios'


import Header from '../Header'
import Footer from '../Footer'


import falc9 from '../../img/falcon-9-spacex-falcon-9-png-414_5414.png'

const Falcon9 = () => {












    return (
        <>
            <Header />
            <section className='showcase-vehicle'>
                <div className='container-vehicle-flex'>
                    <div className='vechicle-info-box'>
                        <h1>FALCON 9</h1>
                    </div>
                    <div className='vechicle-img-box'>
                        <img className='rock-img' src={falc9} alt="Falcon 9" />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Falcon9
