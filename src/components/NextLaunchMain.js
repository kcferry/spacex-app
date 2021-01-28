import falc9 from '../img/falcon-9-spacex-falcon-9-png-414_5414.png'

const NextLaunchMain = ({ isLoading, nextLaunch}) => {
    return isLoading ? (<h1>Loading...</h1>) : (<section className='card'>
            <div>
            <h1>{nextLaunch.name}</h1>
            <img src={nextLaunch.links.patch.small} alt=""/>
            <img src={falc9} className=''/>
            </div>
            </section>)

}

export default NextLaunchMain
