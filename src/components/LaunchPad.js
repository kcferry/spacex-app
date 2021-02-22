import React, { useState, useEffect } from 'react'
import axios from 'axios'

const LaunchPad = (launchLocation) => {

  const [LaunchPadItems, setLaunchPadItems] = useState([])

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios.get(`https://api.spacexdata.com/v4/launchpads/${launchLocation.launchLocation}`);
      setLaunchPadItems(result.data)
    }
    fetchItems()
  }, [])

  return (
    <div className='launch-site'>
      <h3 className='title launch-title'>Launch Site</h3>
      <p>{LaunchPadItems.full_name}</p> 
    </div>
  )
};

export default LaunchPad