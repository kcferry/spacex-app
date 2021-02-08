import React, { useState, useEffect } from 'react'
import axios from 'axios'
import falc9 from '../img/falcon-9-spacex-falcon-9-png-414_5414.png'
import NextLaunchCountdown from '../components/NextLaunchCountdown'
import Payload from '../components/Payload'
import LaunchPad from '../components/LaunchPad'
import Rocket from './Rocket'
import Webcast from './Webcast'
import LaunchMap from './LaunchMap'

const NextLaunchMain = ({ isLoading, nextLaunchItems }) => {

    const [launchPad, setLaunchPad] = useState([])

    useEffect(() => {
        const fetchItems = async () => {
            const result = await axios.get(`https://api.spacexdata.com/v4/launchpads/${nextLaunchItems.launchpad}`);
            setLaunchPad(result.data)
        }

        fetchItems()
    }, [])

    return isLoading ? (<h1>Loading...</h1>) : (<div className='container grid'>

        <div className='countdown card'>
            <NextLaunchCountdown time={nextLaunchItems.date_utc} />
            <br />
            <div className='stream'>
                <button className='btn'>Live Stream</button>
            </div>
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
            <img className='rocket-img' src={falc9} alt="Falcon 9" />
            <p className='nl-details'> {nextLaunchItems.details}</p>
        </div>






        <div className='webcast'>
            <Webcast link={nextLaunchItems.links.youtube_id} />
        </div>

    </div>
    )

};

export default NextLaunchMain
