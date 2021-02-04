import React from 'react'

const Webcast = ({link}) => {
    const stream = `https://www.youtube.com/embed/${link}?autoplay=1&mute=1&controls=1`

    return (
        <iframe width="420" height="315"
            src= {stream}>
        </iframe>
    )
}

export default Webcast
