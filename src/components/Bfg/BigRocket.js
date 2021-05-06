import React, { useState, useEffect } from 'react'
import axios from 'axios'
import LoadingPage from '../LoadingPage'
import Modal from '../Modal'
import Footer from '../../components/Footer'

import starshipimg from '../../img/SS.png'

const BigRocket = () => {
    const [starshipInfo, setstarshipInfo] = useState([])
    const [isLoading, setisLoading] = useState(true)
    const [isOpen, setisOpen] = useState(false)
    const [isOpen2, setisOpen2] = useState(false)

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
            <section className='showcase'>
                <div className='container-vehicle-grid'>

                    <div className='vechicle-description-box'>
                        <h1 className='vechicle-name title'>STARSHIP</h1>

                        <div className="stream-modal-box">
                            <button onClick={() => setisOpen(true)} className='title'><span className='btn-text'>First Launch</span></button>
                            <Modal link={"z9eoubnO-pE"} open={isOpen} onClose={() => setisOpen(false)} />

                            <button onClick={() => setisOpen2(true)} className='title btn-2'><span className='btn-text'>Live Stream</span></button>
                            <Modal link={"sTA0GTgFn5E"} open={isOpen2} onClose={() => setisOpen2(false)} />
                        </div>
                    </div>

                    <div className='vechicle-info-box'>

                        <div className='vechicle-stats-box'>
                            <table className='info-table'>
                                <tbody>
                                    <tr>
                                        <td><span className='title'>FIRST FLIGHT</span></td>
                                        <td className='table-stat'>{starshipInfo.first_flight}</td>
                                    </tr>
                                    <tr>
                                        <td><span className='title'>SUCCESS RATE</span></td>
                                        <td className='table-stat'>{starshipInfo.success_rate_pct}%</td>
                                    </tr>
                                    <tr>
                                        <td><span className='title'>STAGES</span></td>
                                        <td className='table-stat'>{starshipInfo.stages}</td>
                                    </tr>
                                    <tr>
                                        <td><span className='title'>HEIGHT</span></td>
                                        <td className='table-stat'>{starshipInfo.height.meters}m</td>
                                    </tr>
                                    <tr>
                                        <td><span className='title'>DIAMETER</span></td>
                                        <td className='table-stat'>{starshipInfo.diameter.meters}m</td>
                                    </tr>
                                    <tr>
                                        <td><span className='title'>WEIGHT</span></td>
                                        <td className='table-stat'>{starshipInfo.mass.kg}kg</td>
                                    </tr>
                                    <tr>
                                        <td><span className='title'>ENGINES</span></td>
                                        <td className='table-stat'> 37 Raptor</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>



                    </div>


                    <div className='vechicle-img-box'>
                        <img className='rocket-page-img' src={starshipimg} alt="Star ship" />
                    </div>


                </div>
                <Footer />
            </section>
        </>
    )
}

export default BigRocket