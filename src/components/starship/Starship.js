import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from '../Header'
import Footer from '../Footer'
import LoadingPage from '../LoadingPage'
import Modal from '../Modal'

import starship from '../../img/SS.png'

const Starship = () => {
    const [starshipInfo, setstarshipInfo] = useState([])
    const [isLoading, setisLoading] = useState(true)
    const [isOpen, setisOpen] = useState(false)

    useEffect(() => {
        const fetchItems = async () => {
            const result = await axios.get('https://api.spacexdata.com/v4/rockets')
            setstarshipInfo(result.data[3])
            setisLoading(false)
        }
        fetchItems()
    }, [])

    return isLoading ? (<LoadingPage />) : (
        <>
            <Header />
            <section className='showcase-vehicle'>
                <div className='container-vehicle-grid'>


                    <div className='vechicle-info-box'>

                        <div className='vechicle-stats-box card'>
                            <table>
                                <th> <h1 className='title'>Starship</h1> </th>
                                <tr>
                                    <td><span className='title'>FIRST FLIGHT</span></td>
                                    <td>{starshipInfo.first_flight}</td>
                                </tr>
                                <tr>
                                    <td><span className='title'>SUCCESS RATE</span></td>
                                    <td>{starshipInfo.success_rate_pct}%</td>
                                </tr>
                                <tr>
                                    <td><span className='title'>STAGES</span></td>
                                    <td>{starshipInfo.stages}</td>
                                </tr>
                                <tr>
                                    <td><span className='title'>HEIGHT</span></td>
                                    <td>{starshipInfo.height.meters}</td>
                                </tr>
                                <tr>
                                    <td><span className='title'>DIAMETER</span></td>
                                    <td>{starshipInfo.diameter.meters}</td>
                                </tr>
                            </table>
                        </div>



                    </div>


                    <div className='vechicle-img-box'>
                        <img className='rocket-img' src={starship} alt="Falcon 9" />

                        <div className="stream-modal">
                            <button onClick={() => setisOpen(true)} className='title'><span className='btn-text'>First Launch</span></button>
                            <Modal link={"F-wBgsf8jWY"} open={isOpen} onClose={() => setisOpen(false)} />
                        </div>
                    </div>


                </div>
            </section>
            <Footer />
        </>
    )
}

export default Starship
