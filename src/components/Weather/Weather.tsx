'use client'

import { fetchWeather } from '@/api/weather'
import { switchWeatherIcon } from '@/utils/switchWeatherIcon'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styles from './style.module.scss'
import getGeo from '@/api/geo'
import Loader from '@/ui/Loader/Loader'

const Weather = () => {
	const [temper, setTemper] = useState<number | undefined>()
	const [weather, setWeather] = useState<string | undefined>()
	const [isLoading, setIsLoading] = useState(false)

	const icon = switchWeatherIcon(weather)

	useEffect(() => {
		getGeo(fetchWeather(setTemper, setWeather, setIsLoading))

		const i = setInterval(() => {
			getGeo(fetchWeather(setTemper, setWeather, setIsLoading))
		}, 1200000)
		return () => clearInterval(i)
	}, [])

	return (
		<div className={styles.weather}>
			{isLoading ? (
				<Loader />
			) : (
				<>
					{icon && temper != undefined && (
						<Image
							src={icon.src}
							alt={icon.description}
							width={21}
							height={20}
						></Image>
					)}
					<span>{temper != undefined ? `${temper} C` : ''}</span>
				</>
			)}
		</div>
	)
}

export default Weather
