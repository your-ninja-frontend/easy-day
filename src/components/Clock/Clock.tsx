'use client';

import { useEffect, useState } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const i = setInterval(() => {
      setTime(new Date());
    }, 5000);
    return () => clearInterval(i);
  }, []);

  let hourse: Time = time.getHours(),
    minutes: Time = time.getMinutes();

  if (hourse < 10) {
    hourse = '0' + hourse;
  }

  if (minutes < 10) {
    minutes = '0' + minutes;
  }

  const currentTime = `${hourse}:${minutes}`;

  return <div>{currentTime}</div>;
};

export default Clock;
