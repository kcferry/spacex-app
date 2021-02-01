import falc9 from '../img/falcon-9-spacex-falcon-9-png-414_5414.png'
import NextLaunchCountdown from '../components/NextLaunchCountdown'
import Payload from '../components/Payload'

const NextLaunchMain = ({ isLoading, nextLaunchItems}) => {
    return isLoading ? (<h1>Loading...</h1>) : (<section className='card'>
            <div>
                <h1>{nextLaunchItems.name}</h1>
                <NextLaunchCountdown time={nextLaunchItems.date_utc}/>
                <Payload payloadId={nextLaunchItems.payloads} />
                <img src={nextLaunchItems.links.patch.small} alt="Mission Badge"/>
                <img src={falc9} alt="Falcon 9" className=''/>
            </div>
            </section>
        )

};

export default NextLaunchMain
