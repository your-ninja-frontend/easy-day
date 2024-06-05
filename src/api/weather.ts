const URL = 'https://api.open-meteo.com/v1/forecast'

const params: IParams = {
	latitude: 55.74,
	longitude: 37.61,
	current: ['temperature_2m', 'weather_code'],
}

export async function fetchWeather(setTemper: Function) {
	try {
		const response = await fetch(
			URL +
				'?' +
				`latitude=${params.latitude}` +
				'&' +
				`longitude=${params.longitude}` +
				'&' +
				`current=${params.current.join()}`,
		)
		const data = await response.json()
		const formatTemper = Math.round(data.current.temperature_2m)
		setTemper(formatTemper)
		console.log(data)
	} catch (e) {
		console.log(e)
	}
}
