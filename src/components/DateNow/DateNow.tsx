'use client';

import { dayTimestamp } from '@/utils/dayTimestamp';
import { useEffect, useState } from 'react';

const formatter: Intl.DateTimeFormatOptions = {
  weekday: 'short',
  month: 'short',
  day: 'numeric'
};

const DateNow = () => {
  const [date, setDate] = useState(new Intl.DateTimeFormat('ru', formatter).format(new Date()));

  const diff = dayTimestamp();

  useEffect(() => {
    const i = setInterval(() => {
      setDate(new Intl.DateTimeFormat('ru', formatter).format(new Date()));
    }, diff);
    return () => clearInterval(i);
  }, [diff]);

  return <div>{date}</div>;
};

export default DateNow;
