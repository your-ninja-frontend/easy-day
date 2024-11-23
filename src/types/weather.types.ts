interface IWeatherParams {
  latitude: number;
  longitude: number;
  id: string;
  units: string;
}

interface IWeatherData {
  main: {
    temp: number;
  };
  weather: [
    {
      main: string;
    }
  ];
}

interface IWeatherIconObj {
  description: string;
  src: string;
}

interface IWeatherIcon {
  [key: string]: IWeatherIconObj;
}
