import React from 'react'
import starGif from '../img/86dd6a_8c79b1538eca48c295aacf3a775d1ff2~mv2.gif'

const LoadingPage = () => {
    return (
        <div className='card'>
            <img src={starGif} alt="Loading"/>
            <h2>Loading...</h2>
        </div>
    )
}

export default LoadingPage
