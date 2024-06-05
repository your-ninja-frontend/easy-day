'use client'

import { fetchWeather } from '@/api/weather'
import React, { FC, useEffect, useState } from 'react'

const Weather: FC = () => {
	const [temper, setTemper] = useState(0)

	useEffect(() => {
		fetchWeather(setTemper)
	}, [])

	return <div>{temper} C</div>
}

export default Weather
