import React, { useState, useEffect } from 'react'



const NextLaunchCountDown = ({time}) => {

    const calculateTimeLeft = () => {
        //let year = new Date().getFullYear(); 
        let difference = +new Date(time) - +new Date();

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
              Day: Math.floor(difference / (1000 * 60 * 60 * 24)),
              Hrs: Math.floor((difference / (1000 * 60 * 60)) % 24),
              Min: Math.floor((difference / 1000 / 60) % 60),
              Sec: Math.floor((difference / 1000) % 60)
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
        if (!timeLeft[interval]) {
          return;
        }
      
        timerComponents.push(
          <span>
            {timeLeft[interval]} {interval}{" "}
          </span>
        );
      });


      return (
        <div>
          {timerComponents.length ? <span>T- {timerComponents}</span> : <span>Time's up!</span>}
       </div>  
      )
}

export default NextLaunchCountDown
