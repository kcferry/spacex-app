import React, { useState, useEffect } from 'react'
import axios from 'axios'

const LaunchPad = (launchLocation) => {

  const [LaunchPadItems, setLaunchPadItems] = useState([])
  const [isLoading, setisLoading] = useState(true)

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios.get(`https://api.spacexdata.com/v4/launchpads/${launchLocation.launchLocation}`);
      setLaunchPadItems(result.data)
      setisLoading(false)
    }
    fetchItems()
  }, [])

  return (
    <div>
      <span className='title'><h3>Launch Site</h3></span>
      <p>{LaunchPadItems.full_name}</p> 
    </div>
  )
};

export default LaunchPad