import { setState } from '@/types/setState.types'

const URL = 'https://api.openweathermap.org/data/2.5/weather?'

const BASE_URL_PARAMS: IWeatherParams = {
	latitude: 55.74,
	longitude: 37.61,
	id: '7fadecc488db79a558587c27a95d0163',
	units: 'metric',
}

export function fetchWeather(
	setTemper: setState<number | undefined>,
	setWeather: setState<string | undefined>,
) {
	return async (geo: GeolocationPosition) => {
		try {
			const response = await fetch(
				URL +
					`lat=${geo.coords.latitude ?? BASE_URL_PARAMS.latitude}` +
					`&lon=${geo.coords.longitude ?? BASE_URL_PARAMS.longitude}` +
					`&appid=${BASE_URL_PARAMS.id}` +
					`&units=${BASE_URL_PARAMS.units}`,
			)

			const data: IWeatherData = await response.json()
			const formatTemper = Math.round(data.main.temp)
			const weather = data.weather[0].main

			setTemper(formatTemper)
			setWeather(weather)
		} catch {
			throw new Error('Неудалось получить данные о погоде.')
		}
	}
}
