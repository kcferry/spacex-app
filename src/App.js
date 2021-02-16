import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import NextLaunchMain from './components/NextLaunchMain'
import Mars from './components/mars/Mars'
import Roadster from './components/roadster/Roadster'
import Starship from './components/starship/Starship'
import Webcast from './components/Webcast'
import './styles/styles.scss';
import 'weather-icons/css/weather-icons.css'
import 'weather-icons/css/weather-icons-wind.css';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom'



const App = () => {


  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={NextLaunchMain} />
          <Route path='/live' component={Webcast} />
          <Route path='/starship' component={Starship} />
          <Route path='/roadster' component={Roadster} />
          <Route path='/mars' component={Mars} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
