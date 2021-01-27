import React from 'react'
import Header from './components/Header'


const App = () => {

  fetch('https://api.spacexdata.com/v3/launches/next')
  .then(response => response.json())
  .then(data => console.log(data));



  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
