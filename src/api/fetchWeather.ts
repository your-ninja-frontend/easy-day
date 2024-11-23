const URL = 'https://api.openweathermap.org/data/2.5/weather?';

const BASE_URL_PARAMS: IWeatherParams = {
  latitude: 55.74,
  longitude: 37.61,
  id: '7fadecc488db79a558587c27a95d0163',
  units: 'metric'
};

export async function fetchWeather(
  geo: GeolocationCoordinates | undefined
): Promise<[string | undefined, number | undefined]> {
  const response = await fetch(
    `${URL}lat=${geo?.latitude ?? BASE_URL_PARAMS.latitude}&lon=${geo?.longitude ?? BASE_URL_PARAMS.longitude}&appid=${BASE_URL_PARAMS.id}&units=${BASE_URL_PARAMS.units}`
  );

  const data: IWeatherData = await response.json();
  const formatTemper = Math.round(data.main.temp);
  const userWeather = data.weather[0].main;

  return [userWeather, formatTemper];
}
