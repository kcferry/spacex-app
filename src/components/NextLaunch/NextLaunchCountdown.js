import React, { useState, useEffect } from 'react'

const NextLaunchCountDown = ({ time }) => {
  const calculateTimeLeft = () => {
    //let year = new Date().getFullYear(); 
    let difference = +new Date(time) - +new Date();

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hrs: Math.floor((difference / (1000 * 60 * 60)) % 24),
        min: Math.floor((difference / 1000 / 60) % 60),
        sec: Math.floor((difference / 1000) % 60)
      };
    }
    return timeLeft;
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const timerComponents = []

  Object.keys(timeLeft).forEach((interval) => {

    timerComponents.push(
      <span>
        {timeLeft[interval]}{interval}{" "}
      </span>
    );
  });

  return (
    <>
      {timerComponents.length ? <h2 className='countdown'><span >T- {timerComponents}</span></h2> : <h3><span>Launched!</span></h3>}
    </>
  )
}

export default NextLaunchCountDown
