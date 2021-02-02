import falc9 from '../img/falcon-9-spacex-falcon-9-png-414_5414.png'
import NextLaunchCountdown from '../components/NextLaunchCountdown'
import Payload from '../components/Payload'
import LaunchPad from '../components/LaunchPad'
import Rocket from './Rocket'

const NextLaunchMain = ({ isLoading, nextLaunchItems}) => {
    return isLoading ? (<h1>Loading...</h1>) : (<section className='container-next-launch'>
                <h1>{nextLaunchItems.name}</h1>
                <NextLaunchCountdown time={nextLaunchItems.date_utc}/>
                <Rocket rocketId={nextLaunchItems.rocket}/>
                <LaunchPad launchLocation={nextLaunchItems.launchpad} />
                <Payload payloadId={nextLaunchItems.payloads} />
                <p>{nextLaunchItems.details}</p>
                <div className='nl-rocket'>
                    <img src={falc9} alt="Falcon 9" />
                </div>
                <div className='nl-badge'>
                    <img src={nextLaunchItems.links.patch.small} alt="Mission Badge"/>
                </div>
            </section>
        )

};

export default NextLaunchMain
