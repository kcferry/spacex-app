import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Rocket = ({ rocketId }) => {

  const [rocketItems, setRocketItems] = useState([])
  const [isLoading, setisLoading] = useState(true)

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios.get(`https://api.spacexdata.com/v4/rockets/${rocketId}`)
      setRocketItems(result.data)
      setisLoading(false)
    }
    fetchItems()
  }, [])

  return (
    <>
      <li>Rocket: {rocketItems.name}</li>
    </>
  )
};

export default Rocket