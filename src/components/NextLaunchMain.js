import falc9 from '../img/falcon-9-spacex-falcon-9-png-414_5414.png'
import NextLaunchCountdown from '../components/NextLaunchCountdown'

const NextLaunchMain = ({ isLoading, nextLaunch}) => {
    return isLoading ? (<h1>Loading...</h1>) : (<section className='card'>
            <div>
            <h1>{nextLaunch.name}</h1>
            <NextLaunchCountdown time={nextLaunch.date_utc}/>
            <img src={nextLaunch.links.patch.small} alt="Mission Badge"/>
            <img src={falc9} alt="Falcon 9" className=''/>
            </div>
            </section>)

}

export default NextLaunchMain
