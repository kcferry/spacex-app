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

  console.log(launchLocation)

  return (
    <div>
      <span>Launch Site:</span> {LaunchPadItems.full_name}
    </div>
  )
};

export default LaunchPad