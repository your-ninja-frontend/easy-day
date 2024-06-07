const WEATHER_ICON: IWeatherIcon = {
	thunderstorm: {
		description: 'thunderstorm',
		src: './thunderstorm.svg',
	},
	drizzle: {
		description: 'drizzle',
		src: './drizzle.svg',
	},
	rain: {
		description: 'rain',
		src: './rain.svg',
	},
	snow: {
		description: 'rain',
		src: './rain.svg',
	},
	clear: {
		description: 'sun',
		src: './sun.svg',
	},
	clouds: {
		description: 'cloud',
		src: './cloud.svg',
	},
}

export const switchWeatherIcon = (type: string): IWeatherIconObj => {
	switch (type) {
		case WEATHER_ICON.thunderstorm.description:
			return {
				description: WEATHER_ICON.thunderstorm.description,
				src: WEATHER_ICON.thunderstorm.src,
			}

		case WEATHER_ICON.drizzle.description:
			return {
				description: WEATHER_ICON.drizzle.description,
				src: WEATHER_ICON.drizzle.src,
			}

		case WEATHER_ICON.rain.description:
			return {
				description: WEATHER_ICON.rain.description,
				src: WEATHER_ICON.rain.src,
			}

		case WEATHER_ICON.snow.description:
			return {
				description: WEATHER_ICON.snow.description,
				src: WEATHER_ICON.snow.src,
			}

		case WEATHER_ICON.clear.description:
			return {
				description: WEATHER_ICON.clear.description,
				src: WEATHER_ICON.clear.src,
			}

		case WEATHER_ICON.clouds.description:
			return {
				description: WEATHER_ICON.clouds.description,
				src: WEATHER_ICON.clouds.src,
			}

		default:
			return {
				description: WEATHER_ICON.clouds.description,
				src: WEATHER_ICON.clouds.src,
			}
	}
}
