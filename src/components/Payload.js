import React, { useState, useEffect } from 'react'
import axios from 'axios'
import LaunchMap from './LaunchMap'

const Payload = (payloadId) => {

  const [payloadItems, setPayloadItems] = useState([])
  const [isLoading, setisLoading] = useState(true)

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios.get(`https://api.spacexdata.com/v4/payloads/${payloadId.payloadId[0]}`)
      setPayloadItems(result.data)
      setisLoading(false)
    }
    fetchItems()
  }, [])

  return (
    <>
      <li>Payload: {payloadItems.name}</li>
      <li>Payload Type: {payloadItems.type}</li>
      <li>Customer: {payloadItems.customers}</li>
      <li>Mass KG: {payloadItems.mass_kg}</li>
      <li>Mass LB: {payloadItems.mass_lbs}</li>
      <li>Orbit: {payloadItems.orbit}</li>
      <li>Regime: {payloadItems.regime}</li>
    </>
  )
};

export default Payload
