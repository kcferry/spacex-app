import React from 'react'

const Webcast = ({ link }) => {
    const stream = `https://www.youtube.com/embed/${link}?autoplay=1&mute=1&controls=1`

    return (
        <iframe width="400" height="300"
            src={stream}>
        </iframe>
    )
}

export default Webcast
