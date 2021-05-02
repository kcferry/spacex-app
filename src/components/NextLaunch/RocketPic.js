import React from 'react'
import falc9crew from '../../img/falcon-9-spacex-falcon-9-png-414_5414.png'
import falc9fair from '../../img/falc9Fairing.png'
import falcHeavy from '../../img/falconHeavy.png'

const RocketPic = ({ rocketItems, payloadItems }) => {
    const isDragon = payloadItems.dragon
    const rocketName = rocketItems.name
    let rocketPicture = null


    if (rocketName === 'Falcon 9' && isDragon) {
        rocketPicture = falc9crew
    } else if (rocketName === 'Falcon 9' && !isDragon) {
        rocketPicture = falc9fair
    } else if (rocketName === 'Falcon Heavy') {
        rocketPicture = falcHeavy
    }

    return (
        <>
            <img className='rocket-img' src={rocketPicture} alt="Rocket" />
        </>
    )
}

export default RocketPic
