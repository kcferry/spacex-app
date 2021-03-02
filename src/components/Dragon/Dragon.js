import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from '../Header'
import Footer from '../Footer'
import LoadingPage from '../LoadingPage'
import Modal from '../Modal'

import DragonImg from '../../img/D2.18705984.png'



const Dragon = () => {
    const [dragonInfo, setdragonInfo] = useState([])
    const [isLoading, setisLoading] = useState(true)
    const [isOpen, setisOpen] = useState(false)


    useEffect(() => {
        const fetchItems = async () => {
            const result = await axios.get('https://api.spacexdata.com/v4/dragons')
            setdragonInfo(result.data[1])
            setisLoading(false)
        }
        fetchItems()
    }, [])



    return isLoading ? (<LoadingPage />) : (
        <>
            <Header />
            <section className='showcase'>

                <div className='container-vehicle-grid'>

                    <div className='vechicle-description-box'>
                        <h1 className='vechicle-name title'>DRAGON 2</h1>
                        <div className="stream-modal">
                            <button onClick={() => setisOpen(true)} className='title'><span className='btn-text'>First Launch</span></button>
                            <Modal link={"F-wBgsf8jWY"} open={isOpen} onClose={() => setisOpen(false)} />
                        </div>
                    </div>


                    <div className='vechicle-info-box'>

                        <div className='vechicle-stats-box'>
                            <table className='info-table'>
                                <tbody>
                                    <tr>
                                        <td><span className='title'>FIRST FLIGHT</span></td>
                                        <td className='table-stat'>{dragonInfo.first_flight}</td>
                                    </tr>
                                    <tr>
                                        <td><span className='title'>CREW CAPACITY</span></td>
                                        <td className='table-stat'>{dragonInfo.crew_capacity}</td>
                                    </tr>
                                    <tr>
                                        <td><span className='title'>HEIGHT</span></td>
                                        <td className='table-stat'>{dragonInfo.height_w_trunk.meters}m</td>
                                    </tr>
                                    <tr>
                                        <td><span className='title'>DIAMETER</span></td>
                                        <td className='table-stat'>{dragonInfo.diameter.meters}m</td>
                                    </tr>
                                    <tr>
                                        <td><span className='title'>WEIGHT</span></td>
                                        <td className='table-stat'>{dragonInfo.dry_mass_kg}kg</td>
                                    </tr>
                                    <tr>
                                        <td><span className='title'>ENGINES</span></td>
                                        <td className='table-stat'>18 + 8 / DRACO + SUPERDRACO</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>

                    </div>

                    <div className='vechicle-img-box'>
                        <img className='dragon-img' src={DragonImg} alt="Falcon 9" />
                    </div>


                </div>

            </section>
            <Footer />
        </>
    )
}

export default Dragon
