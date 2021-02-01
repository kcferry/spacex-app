import React, {useState, useEffect} from 'react'
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
    },[])

    return (
        <div>
            <ul>
                <li>Payload: {payloadItems.type}</li>
                <li>Mass KG: {payloadItems.mass_kg}</li>
                <li>Orbit: {payloadItems.orbit}</li>
            </ul>

        </div>
    )
};

export default Payload
