import React from 'react'
import starGif from '../img/86dd6a_8c79b1538eca48c295aacf3a775d1ff2~mv2.gif'

const LoadingPage = () => {
    return (
        <div className='loading'>
            <img className='loading-gif' src={starGif} alt="Loading" />
        </div>
    )
}

export default LoadingPage
