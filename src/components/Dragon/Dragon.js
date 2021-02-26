import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from '../Header'
import Footer from '../Footer'
import LoadingPage from '../LoadingPage'

import DragonImg from '../../img/D2.18705984.png'
import DragonLogo from '../../img/kisspng-logo-international-space-station-spacex-dragon-fal-5ae65ebec12f82.8452981115250469747913.jpg'


const Dragon = () => {
    const [dragonInfo, setdragonInfo] = useState([])
    const [isLoading, setisLoading] = useState(true)


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

                <div className='container vehicle-grid'>
                    <div className='vechicle-info-box'>

                        <div className='vechicle-stats-box card'>
                            <table>
                                    <th> <h1 className='title'>DRAGON 2</h1> </th>
                                    <tr>
                                        <td><span className='title'>FIRST FLIGHT</span></td>
                                        <td>{dragonInfo.first_flight}</td>
                                    </tr>
                                    <tr>
                                        <td><span className='title'>CREW CAPACITY</span></td>
                                        <td>{dragonInfo.crew_capacity}</td>
                                    </tr>
                                    <tr>
                                        <td><span className='title'>HEIGHT</span></td>
                                        <td>{dragonInfo.height_w_trunk.meters}m</td>
                                    </tr>
                                    <tr>
                                        <td><span className='title'>DIAMETER</span></td>
                                        <td>{dragonInfo.diameter.meters}m</td>
                                    </tr>
                                    <tr>
                                        <td><span className='title'>WEIGHT</span></td>
                                        <td>{dragonInfo.dry_mass_kg}kg</td>
                                    </tr>
                                    <tr>
                                        <td><span className='title'>ENGINES</span></td>
                                        <td>18 + 8 / DRACO + SUPERDRACO</td>
                                    </tr>
                                    
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
