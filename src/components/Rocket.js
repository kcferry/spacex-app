import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Rocket = (rocketId) => {

    const [rocketItems, setRocketItems] = useState([])
    const [isLoading, setisLoading] = useState(true)
    
    useEffect(() => {
      const fetchItems = async () => {
        const result = await axios.get(`https://api.spacexdata.com/v4/rockets/${rocketId.rocketId}`)
        setRocketItems(result.data)
        setisLoading(false)
      }
      fetchItems()
    },[])

    console.log(rocketId)

    return (
        <div className='rocket'>

                <h3>Rocket: {rocketItems.name}</h3>


        </div>
    )
};

export default Rocket