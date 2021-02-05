import falc9 from '../img/falcon-9-spacex-falcon-9-png-414_5414.png'
import NextLaunchCountdown from '../components/NextLaunchCountdown'
import Payload from '../components/Payload'
import LaunchPad from '../components/LaunchPad'
import Rocket from './Rocket'
import Webcast from './Webcast'
import LaunchMap from './LaunchMap'

const NextLaunchMain = ({ isLoading, nextLaunchItems }) => {
    return isLoading ? (<h1>Loading...</h1>) : (<div className='container grid'>
        <h1>Next Launch: {nextLaunchItems.name}</h1>

        <div className='countdown.card'></div>
        <NextLaunchCountdown time={nextLaunchItems.date_utc} />

        <div className='info'>
            <ul>
                <Rocket rocketId={nextLaunchItems.rocket} />
                <Payload payloadId={nextLaunchItems.payloads} />
                <li>
                    <LaunchPad launchLocation={nextLaunchItems.launchpad} />
                    <div class='leaflet-container'>
                        <LaunchMap launchLocation={nextLaunchItems.launchpad} />
                    </div>
                </li>
            </ul>
        </div>

        <div className='details.card'>
            <img className='badge-img' src={nextLaunchItems.links.patch.large} alt="Mission Badge" />
            <p className='nl-details'> {nextLaunchItems.details}</p>
        </div>

        <div className='nl-rocket'>
            <img className='rocket-img' src={falc9} alt="Falcon 9" />
        </div>

        <div className='launch-site.card'>

        </div>


        <div className='webcast'>
            <Webcast link={nextLaunchItems.links.youtube_id} />
        </div>

    </div>
    )

};

export default NextLaunchMain
