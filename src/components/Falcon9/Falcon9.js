import React, { useState, useEffect } from 'react'
import axios from 'axios'
import LoadingPage from '../LoadingPage'
import Modal from '../Modal'


import falc9 from '../../img/falcon-9-spacex-falcon-9-png-414_5414.png'

const Falcon9 = () => {
    const [falc9Info, setfalc9Info] = useState([])
    const [isLoading, setisLoading] = useState(true)
    const [isOpen, setisOpen] = useState(false)

    useEffect(() => {
        const fetchItems = async () => {
            const result = await axios.get('https://api.spacexdata.com/v4/rockets')
            setfalc9Info(result.data[1])
            setisLoading(false)
        }
        fetchItems()
    }, [])




    return isLoading ? (<LoadingPage />) : (
        <>
            <section className='showcase'>
                <div className='container-vehicle-grid'>

                    <div className='vechicle-description-box'>
                        <h1 className='vechicle-name title'>FALCON 9</h1>
                        <div className="stream-modal">
                            <button onClick={() => setisOpen(true)} className='title'><span className='btn-text'>First Launch</span></button>
                            <Modal link={"nxSxgBKlYws"} open={isOpen} onClose={() => setisOpen(false)} />
                        </div>
                    </div>


                    <div className='vechicle-info-box'>

                        <div className='vechicle-stats-box'>
                            <table className='info-table'>
                                <tbody>
                                    <tr>
                                        <td><span className='title'>FIRST FLIGHT</span></td>
                                        <td className='table-stat'>{falc9Info.first_flight}</td>
                                    </tr>
                                    <tr>
                                        <td><span className='title'>SUCCESS RATE</span></td>
                                        <td className='table-stat'>{falc9Info.success_rate_pct}%</td>
                                    </tr>
                                    <tr>
                                        <td><span className='title'>STAGES</span></td>
                                        <td className='table-stat'>{falc9Info.stages}</td>
                                    </tr>
                                    <tr>
                                        <td><span className='title'>HEIGHT</span></td>
                                        <td className='table-stat'>{falc9Info.height.meters}m</td>
                                    </tr>
                                    <tr>
                                        <td><span className='title'>DIAMETER</span></td>
                                        <td className='table-stat'>{falc9Info.diameter.meters}m</td>
                                    </tr>
                                    <tr>
                                        <td><span className='title'>WEIGHT</span></td>
                                        <td className='table-stat'>{falc9Info.mass.kg}kg</td>
                                    </tr>
                                    <tr>
                                        <td><span className='title'>ENGINES</span></td>
                                        <td className='table-stat'> 9 Merlin</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>



                    </div>


                    <div className='vechicle-img-box'>
                        <img className='rocket-page-img' src={falc9} alt="Falcon 9" />


                    </div>


                </div>

            </section>
        </>
    )
}

export default Falcon9
