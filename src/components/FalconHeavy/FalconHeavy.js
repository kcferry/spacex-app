import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from '../Header'
import Footer from '../Footer'
import LoadingPage from '../LoadingPage'
import Modal from '../Modal'

import falcHeavy from '../../img/falconHeavy.png'

const FalconHeavy = () => {
    const [falcHeavyInfo, setfalcHeavyInfo] = useState([])
    const [isLoading, setisLoading] = useState(true)
    const [isOpen, setisOpen] = useState(false)

    useEffect(() => {
        const fetchItems = async () => {
            const result = await axios.get('https://api.spacexdata.com/v4/rockets')
            setfalcHeavyInfo(result.data[2])
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
                                <th> <h1 className='title'>Falcon Heavy</h1> </th>
                                <tr>
                                    <td><span className='title'>FIRST FLIGHT</span></td>
                                    <td>{falcHeavyInfo.first_flight}</td>
                                </tr>
                                <tr>
                                    <td><span className='title'>SUCCESS RATE</span></td>
                                    <td>{falcHeavyInfo.success_rate_pct}%</td>
                                </tr>
                                <tr>
                                    <td><span className='title'>STAGES</span></td>
                                    <td>{falcHeavyInfo.stages}</td>
                                </tr>
                                <tr>
                                    <td><span className='title'>HEIGHT</span></td>
                                    <td>{falcHeavyInfo.height.meters}</td>
                                </tr>
                                <tr>
                                    <td><span className='title'>DIAMETER</span></td>
                                    <td>{falcHeavyInfo.diameter.meters}</td>
                                </tr>
                            </table>
                        </div>



                    </div>


                    <div className='vechicle-img-box'>
                        <img className='rocket-img' src={falcHeavy} alt="Falcon 9" />

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

export default FalconHeavy
