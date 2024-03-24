import React, { useState, useEffect } from 'react'

export default function CurrentDate() {

    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
      const updateTime = () => {
        setCurrentTime(new Date());
      };
  
      const updateIn = setInterval(updateTime, 1000);
  
      return () => {
        clearInterval(updateIn);
      };
    }, []);
  
    const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });

    return (
        <>
            <p>Izmir, Turkey (GMT+3) | Current Time: {formattedTime}</p>
        </>
  )
}