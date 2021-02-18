import React, { useState, useEffect } from 'react'
import axios from 'axios'

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
      <tr>
        <td><span className='title'>Payload:</span></td>
        <td>{payloadItems.name}</td>
      </tr>
      <tr>
        <td><span className='title'>Payload Type:</span></td>
        <td>{payloadItems.type}</td>
      </tr>
      <tr>
        <td><span className='title'>Customer:</span></td>
        <td>{payloadItems.customers}</td>
      </tr>
      <tr>
        <td><span className='title'>Mass KG:</span></td>
        <td>{payloadItems.mass_kg}kg</td>
      </tr>
      <tr>
        <td><span className='title'>Orbit:</span></td>
        <td>{payloadItems.orbit}</td>
      </tr>
      <tr>
        <td><span className='title'>Regime:</span></td>
        <td>{payloadItems.regime}</td>
      </tr>
    </>
  )
};

export default Payload
