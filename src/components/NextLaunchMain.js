import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NextLaunchCountdown from '../components/NextLaunchCountdown'
import Payload from '../components/Payload'
import LaunchPad from '../components/LaunchPad'
import LoadingPage from '../components/LoadingPage'
import RocketPic from './RocketPic'
import LaunchMap from './LaunchMap'
import Weather from './Weather'
import Header from './Header'
import Footer from './Footer'


const NextLaunchMain = () => {

    const [nextLaunchItems, setnextLaunchitems] = useState([])
    const [isLoading, setisLoading] = useState(true)
    const [launchPad, setLaunchPad] = useState([])
    const [rocketItems, setRocketItems] = useState([])
    const [weatherItems, setWeatherItems] = useState([])

    useEffect(() => {
        const fetchItems = async () => {
            const result = await axios.get('https://api.spacexdata.com/v4/launches/next')
            setnextLaunchitems(result.data)
            setisLoading(false)
        }
        fetchItems()
    }, [])


    useEffect(() => {
        const fetchItems = async () => {
            const result = await axios.get(`https://api.spacexdata.com/v4/launchpads/${nextLaunchItems.launchpad}`);
            setLaunchPad(result.data)
        }
        fetchItems()
    }, [nextLaunchItems])


    useEffect(() => {
        const fetchItems = async () => {
            const result = await axios.get(`https://api.spacexdata.com/v4/rockets/${nextLaunchItems.rocket}`)
            setRocketItems(result.data)
        }
        fetchItems()
    }, [nextLaunchItems])


    useEffect(() => {
        const fetchItems = async () => {
            const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${launchPad.latitude}&lon=${launchPad.longitude}&units=metric&appid=${process.env.REACT_APP_OPENWEATHER}`)
            setWeatherItems(result.data)
        }
        fetchItems()
    }, [launchPad])


    return isLoading ? (<LoadingPage />) : (
        <>
            <section className='showcase'>
                <div className='container grid'>

                    <div className='countdown card'>
                        <div className='count-container'>
                            <div className='count-left-container'>

                                <div className='mission-name-box'>
                                    <h1>{nextLaunchItems.name}</h1>
                                </div>

                                <div className='clock-box'>
                                    <NextLaunchCountdown time={nextLaunchItems.date_utc} />
                                </div>
                                <div className='stream-box'>
                                    {nextLaunchItems.details ? <p className='nl-details'>{nextLaunchItems.details}</p> : <p>Mission Details Coming Soon.</p>}
                                </div>
                            </div>

                            <div className='count-rocket-box'>
                                <RocketPic rocketItems={rocketItems} payloadItems={nextLaunchItems.payloads} />
                            </div>

                        </div>
                    </div>

                    <div className='card'>
                        <LaunchPad launchLocation={nextLaunchItems.launchpad} />
                        <Weather forcast={weatherItems} />
                        <div className='map'>
                            <div className='leaflet-container'>
                                <LaunchMap latitude={launchPad.latitude} longitude={launchPad.longitude} />
                            </div>
                        </div>
                    </div>

                    <div className='info'>
                        <table className='info-table'>
                            <tr>
                                <td><span className='title'>Rocket</span></td>
                                <td>{rocketItems.name}</td>
                            </tr>
                            <tr>
                                <td><span className='title'>Flight No.</span></td>
                                <td>{nextLaunchItems.flight_number}</td>
                            </tr>
                            <Payload payloadId={nextLaunchItems.payloads} />
                        </table>
                    </div>

                    <div className='details card'>
                        <img className='badge-img' src={nextLaunchItems.links.patch.small} alt="Mission Badge" />
                    </div>

                    <Footer />
                </div>
            </section>
        </>
    )

};

export default NextLaunchMain
