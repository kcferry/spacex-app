import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import NextLaunchMain from './components/NextLaunchMain'
import Mars from './components/mars/Mars'
import Roadster from './components/roadster/Roadster'
import Starship from './components/starship/Starship'
import './App.css'
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom'

const App = () => {


  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={NextLaunchMain} />
          <Route path='/starship' component={Starship} />
          <Route path='/roadster' component={Roadster} />
          <Route path='/mars' component={Mars} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
