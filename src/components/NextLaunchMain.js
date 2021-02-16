import React, { useState, useEffect } from 'react'
import axios from 'axios'
import falc9crew from '../img/falcon-9-spacex-falcon-9-png-414_5414.png'
import falc9fair from '../img/falc9Fairing.png'
import falcHeavy from '../img/falconHeavy.png'
import NextLaunchCountdown from '../components/NextLaunchCountdown'
import Payload from '../components/Payload'
import LaunchPad from '../components/LaunchPad'
import LoadingPage from '../components/LoadingPage'
import Rocket from './Rocket'
import { Link } from 'react-router-dom'
import LaunchMap from './LaunchMap'
import Weather from './Weather'

const NextLaunchMain = () => {

    const [nextLaunchItems, setnextLaunchitems] = useState([])
    const [isLoading, setisLoading] = useState(true)
    const [launchPad, setLaunchPad] = useState([])
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
          const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${launchPad.latitude}&lon=${launchPad.longitude}&units=metric&appid=${process.env.REACT_APP_OPENWEATHER}`)
          setWeatherItems(result.data)
        }
        fetchItems()
      }, [launchPad])




    return isLoading ? (<LoadingPage />) : (
        <section className='showcase'>
            <div className='container grid'>

                <div className='countdown card'>
                    <NextLaunchCountdown time={nextLaunchItems.date_utc} />
                    <br />
                    <div className='stream'>
                        <Link to='/live'>
                        <button className='btn'>Live Stream</button>
                        </Link>
                    </div>
                </div>

                <div>
                    <Weather forcast={weatherItems} />
                </div>

                <div className='info'>
                    <ul>
                        <li> <h1>{nextLaunchItems.name}</h1></li>
                        <Rocket rocketId={nextLaunchItems.rocket} />
                        <li>Flight No. {nextLaunchItems.flight_number}</li>
                        <Payload payloadId={nextLaunchItems.payloads} />
                        <li>
                            <LaunchPad launchLocation={nextLaunchItems.launchpad} />
                            <div className='leaflet-container'>
                                <LaunchMap latitude={launchPad.latitude} longitude={launchPad.longitude} />
                            </div>
                        </li>
                    </ul>
                </div>

                <div className='details card'>
                    <img className='badge-img' src={nextLaunchItems.links.patch.small} alt="Mission Badge" />
                    <img className='rocket-img' src={falc9fair} alt="Falcon 9" />
                    <p className='nl-details'> {nextLaunchItems.details}</p>
                </div>
            </div>
        </section>
    )

};

export default NextLaunchMain
