'use client'

import { fetchWeather } from '@/api/weather'
import { switchWeatherIcon } from '@/utils/switchWeatherIcon'
import Image from 'next/image'
import React, { FC, useEffect, useState } from 'react'
import styles from './style.module.scss'
import getGeo from '@/api/geo'

const Weather: FC = () => {
	const [temper, setTemper] = useState<number | undefined>()
	const [weather, setWeather] = useState<string | undefined>()

	const icon = switchWeatherIcon(weather)

	useEffect(() => {
		getGeo(fetchWeather(setTemper, setWeather))

		const i = setInterval(() => {
			getGeo(fetchWeather(setTemper, setWeather))
		}, 1200000)
		return () => clearInterval(i)
	}, [])

	return (
		<div className={styles.weather}>
			{icon && (
				<Image
					src={icon.src}
					alt={icon.description}
					width={20}
					height={20}
				></Image>
			)}
			<span>{temper ?? '' ? `${temper} C` : ' '}</span>
		</div>
	)
}

export default Weather
