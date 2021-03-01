import React, { useState, useEffect } from 'react'

const NextLaunchCountDown = ({ time }) => {
  const calculateTimeLeft = () => {
    //let year = new Date().getFullYear(); 
    let difference = +new Date(time) - +new Date();

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        Days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, 0),
        Hrs: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, 0),
        Min: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, 0),
        Sec: String(Math.floor((difference / 1000 ) % 60 )).padStart(2, 0)
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
        {timeLeft[interval]}{" "}
      </span>
    );
  });


  return (
    <>
      {timerComponents.length ?
        <div className='clock-box-grid'>
          <h2 className='countdown-days clock-font-time'><span >- {timerComponents[0]}</span></h2>
          <h2 className='countdown-hours clock-font-time'><span >{timerComponents[1]}</span></h2>
          <h2 className='countdown-mins clock-font-time'><span >{timerComponents[2]}</span></h2>
          <h2 className='countdown-seconds clock-font-time'><span >{timerComponents[3]}</span></h2>
          <h3 className='clock-font'><span >Days</span></h3>
          <h3 className='clock-font'><span >Hours</span></h3>
          <h3 className='clock-font'><span >Mins</span></h3>
          <h3 className='clock-font'><span >Secs</span></h3>
        </div>



        : <h3><span>Launched!</span></h3>}
    </>
  )
}

export default NextLaunchCountDown
