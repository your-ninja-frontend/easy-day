const WEATHER_ICON: IWeatherIcon = {
	thunderstorm: {
		description: 'Thunderstorm',
		src: './thunderstorm.svg',
	},
	drizzle: {
		description: 'Drizzle',
		src: './drizzle.svg',
	},
	rain: {
		description: 'Rain',
		src: './rain.svg',
	},
	snow: {
		description: 'Snow',
		src: './snow.svg',
	},
	clear: {
		description: 'Clear',
		src: './sun.svg',
	},
	clouds: {
		description: 'Clouds',
		src: './cloud.svg',
	},
}

export const switchWeatherIcon = (
	type: string | undefined,
): IWeatherIconObj | '' => {
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

		case WEATHER_ICON.clouds.description || 'Atmosphere':
			return {
				description: WEATHER_ICON.clouds.description,
				src: WEATHER_ICON.clouds.src,
			}

		default:
			return ''
	}
}
