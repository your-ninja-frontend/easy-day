'use client'

import { fetchWeather } from '@/api/weather'
import { switchWeatherIcon } from '@/utils/switchWeatherIcon'
import Image from 'next/image'
import React, { FC, useEffect, useState } from 'react'
import styles from './style.module.scss'

const Weather: FC = () => {
	const [temper, setTemper] = useState(0)
	const [weather, setWeather] = useState('')

	const icon = switchWeatherIcon(weather)

	useEffect(() => {
		fetchWeather(setTemper, setWeather)
		const i = setInterval(() => {
			fetchWeather(setTemper, setWeather)
		}, 1200000)
		return () => clearInterval(i)
	}, [])

	return (
		<div className={styles.weather}>
			<Image
				src={icon.src}
				alt={icon.description}
				width={20}
				height={20}
			></Image>
			<span>{`${temper} C`}</span>
		</div>
	)
}

export default Weather
