import falc9 from '../img/falcon-9-spacex-falcon-9-png-414_5414.png'
import NextLaunchCountdown from '../components/NextLaunchCountdown'
import Payload from '../components/Payload'
import LaunchPad from '../components/LaunchPad'
import Rocket from './Rocket'
import Webcast from './Webcast'
import LaunchMap from './LaunchMap'

const NextLaunchMain = ({ isLoading, nextLaunchItems}) => {
    return isLoading ? (<h1>Loading...</h1>) : (<section className='container-next-launch'>
                <h1>Next Launch: {nextLaunchItems.name}</h1>

                <NextLaunchCountdown time={nextLaunchItems.date_utc}/>

                <div className='info'>
                    <ul>
                            <Rocket rocketId={nextLaunchItems.rocket}/>
                            <Payload payloadId={nextLaunchItems.payloads} />
                    </ul>
                
                </div>

                <div className='launch-site'>
                    <LaunchPad launchLocation={nextLaunchItems.launchpad} />  
                </div>

                <div className='details-box'>
                    <img className='badge-img' src={nextLaunchItems.links.patch.large} alt="Mission Badge"/>
                    <p className ='nl-details'> {nextLaunchItems.details}</p>
                </div>

                <div class='leaflet-container'>
                    <LaunchMap launchLocation={nextLaunchItems.launchpad}/>
                </div>

                <div className='webcast'>
                    <h2>Live Now</h2>
                    <Webcast link={nextLaunchItems.links.youtube_id}/>
                </div>

                <div className='nl-rocket'>
                    <img className='rocket-img' src={falc9} alt="Falcon 9" />
                </div>   
                
                
            </section>
        )

};

export default NextLaunchMain
