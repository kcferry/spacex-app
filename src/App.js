import NextLaunchMain from './components/NextLaunchMain'
import Mars from './components/mars/Mars'
import Roadster from './components/roadster/Roadster'
import Starship from './components/starship/Starship'
import './styles/styles.scss';
import 'weather-icons/css/weather-icons.css'
import 'weather-icons/css/weather-icons-wind.css';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom'
import LandingPage from './components/LandingPage'



const App = () => {


  return (
    <>
      <Router>

        <Switch>
          <Route path='/' exact component={LandingPage} />
          <Route path='/next-launch' component={NextLaunchMain} />
          <Route path='/starship' component={Starship} />
          <Route path='/roadster' component={Roadster} />
          <Route path='/mars' component={Mars} />
        </Switch>

      </Router>
    </>
  );
}

export default App;
