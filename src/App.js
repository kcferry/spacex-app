import NextLaunchMain from './components/NextLaunch/NextLaunchMain'
import Dragon from './components/Dragon/Dragon'
import FalconHeavy from './components/FalconHeavy/FalconHeavy'
import Starship from './components/Starship/Starship'
import Falcon9 from './components/Falcon9/Falcon9'
import './styles/styles.scss';
import 'weather-icons/css/weather-icons.css'
import 'weather-icons/css/weather-icons-wind.css';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage'



const App = () => {


  return (
    <>
      <Router>

        <Switch>
          <Route path='/' exact component={LandingPage} />
          <Route path='/next-launch' component={NextLaunchMain} />
          <Route path='/falcon-9' component={Falcon9} />
          <Route path='/falcon-heavy' component={FalconHeavy} />
          <Route path='/dragon' component={Dragon} />
          <Route path='/starship' component={Starship} />
        </Switch>

      </Router>
    </>
  );
}

export default App;
