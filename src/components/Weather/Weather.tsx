'use client';

import { fetchWeather } from '@/api/fetchWeather';
import getGeo from '@/api/getGeo';
import { useFetching } from '@/hooks/useFetching';
import Loader from '@/ui/Loader/Loader';
import { switchWeatherIcon } from '@/utils/switchWeatherIcon';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './style.module.scss';

const Weather = () => {
  const [temper, setTemper] = useState<number>();
  const [icon, setIcon] = useState<'' | IWeatherIconObj>();

  const [fetchUserWeather, loading, error] = useFetching(async () => {
    const coords = await getGeo();
    const [userWeather, formatTemper] = await fetchWeather(coords);
    setTemper(formatTemper);
    setIcon(switchWeatherIcon(userWeather));
  });

  useEffect(() => {
    fetchUserWeather();

    const i = setInterval(() => {
      fetchUserWeather();
    }, 300000);
    return () => clearInterval(i);
  }, []);

  return (
    <div className={styles.weather}>
      {loading ? (
        <Loader />
      ) : (
        <>
          {!error && icon && (
            <>
              <Image src={icon.src} alt={icon.description} width={21} height={20} />
              <span>
                {`${temper}`}
                <sup>°C</sup>
              </span>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Weather;
