import React, { useState, useEffect } from 'react'
import axios from 'axios'
import LoadingPage from '../LoadingPage'
import Modal from '../Modal'
import Footer from '../../components/Footer'

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
            <section className='showcase'>
                <div className='container-vehicle-grid'>

                    <div className='vechicle-description-box'>
                        <h1 className='vechicle-name title'>FALCON HEAVY</h1>
                        <div className="stream-modal">
                            <button onClick={() => setisOpen(true)} className='title'><span className='btn-text'>First Launch</span></button>
                            <Modal link={"wbSwFU6tY1c"} open={isOpen} onClose={() => setisOpen(false)} />
                        </div>
                    </div>


                    <div className='vechicle-info-box'>

                        <div className='vechicle-stats-box'>
                            <table className='info-table'>
                                <tbody>
                                    <tr>
                                        <td><span className='title'>FIRST FLIGHT</span></td>
                                        <td className='table-stat'>{falcHeavyInfo.first_flight}</td>
                                    </tr>
                                    <tr>
                                        <td><span className='title'>SUCCESS RATE</span></td>
                                        <td className='table-stat'>{falcHeavyInfo.success_rate_pct}%</td>
                                    </tr>
                                    <tr>
                                        <td><span className='title'>STAGES</span></td>
                                        <td className='table-stat'>{falcHeavyInfo.stages}</td>
                                    </tr>
                                    <tr>
                                        <td><span className='title'>HEIGHT</span></td>
                                        <td className='table-stat'>{falcHeavyInfo.height.meters}m</td>
                                    </tr>
                                    <tr>
                                        <td><span className='title'>DIAMETER</span></td>
                                        <td className='table-stat'>{falcHeavyInfo.diameter.meters}m</td>
                                    </tr>
                                    <tr>
                                        <td><span className='title'>WEIGHT</span></td>
                                        <td className='table-stat'>{falcHeavyInfo.mass.kg}kg</td>
                                    </tr>
                                    <tr>
                                        <td><span className='title'>ENGINES</span></td>
                                        <td className='table-stat'> 27 Merlin</td>
                                    </tr>


                                </tbody>
                            </table>
                        </div>

                    </div>

                    <div className='vechicle-img-box'>
                        <img className='rocket-page-img' src={falcHeavy} alt="Falcon 9" />
                    </div>

                </div>
                <Footer />
            </section>
        </>
    )
}

export default FalconHeavy
