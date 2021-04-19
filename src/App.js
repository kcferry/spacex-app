import NextLaunchMain from './components/NextLaunch/NextLaunchMain';
import Dragon from './components/Dragon/Dragon';
import FalconHeavy from './components/FalconHeavy/FalconHeavy';
import Falcon9 from './components/Falcon9/Falcon9';
import BigRocket from './components/Bfg/BigRocket'
import './styles/styles.scss';
import 'weather-icons/css/weather-icons.css';
import 'weather-icons/css/weather-icons-wind.css';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage'
import Header from '../src/components/Header/Header'


const App = () => {

  const routes = [
    {
      path: '/next-launch',
      comp: NextLaunchMain
    },
    {
      path: '/falcon-9',
      comp: Falcon9
    },
    {
      path: '/falcon-heavy',
      comp: FalconHeavy
    },
    {
      path: '/dragon',
      comp: Dragon
    },
    {
      path: '/starship',
      comp: BigRocket
    },
  ]

  return (
    <>
      <Router>
      
        <Header />

        <Switch>
          <Route path='/' exact component={LandingPage} />
          {routes.map((page) => {
            return <Route path={page.path} component={page.comp} /> 
          })} 
        </Switch>
      </Router>
    </>
  );
}

export default App;
