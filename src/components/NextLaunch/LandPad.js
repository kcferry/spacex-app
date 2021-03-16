import React, { useState, useEffect } from 'react'
import axios from 'axios'

const LandPad = ({ landpadId }) => {

    const [landPad, setLandPad] = useState([])

    useEffect(() => {
        const fetchItems = async () => {
            const result = await axios.get(`https://api.spacexdata.com/v4/landpads/${landpadId}`);
            setLandPad(result.data)
        }
        fetchItems()
    }, [])

    return (
        <>
            <tr>
                <td><span className='title'>Landing Pad</span></td>
                <td>{landPad.full_name ? landPad.full_name : 'TBA' }</td>
            </tr>
        </>
    )
}

export default LandPad
