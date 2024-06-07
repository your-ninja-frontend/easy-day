const URL = 'https://api.openweathermap.org/data/2.5/weather?'

const params: IWeatherParams = {
	latitude: 55.74,
	longitude: 37.61,
	id: '7fadecc488db79a558587c27a95d0163',
	units: 'metric',
}

export async function fetchWeather(setTemper: Function, setWeather: Function) {
	try {
		const response = await fetch(
			URL +
				`lat=${params.latitude}` +
				'&' +
				`lon=${params.longitude}` +
				'&' +
				'appid=' +
				params.id +
				'&units=' +
				params.units,
		)

		const data: IWeatherData = await response.json()
		const formatTemper = Math.round(data.main.temp)
		const weather = data.weather[0].main

		setTemper(formatTemper)
		setWeather(weather)
	} catch (e) {
		console.log(e)
	}
}
