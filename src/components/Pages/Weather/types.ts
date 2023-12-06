export interface GeolocationPosition {
  coords: {
    latitude: number
    longitude: number
    altitude: number | null
    accuracy: number
    altitudeAccuracy: number | null
    heading: number | null
    speed: number | null
  };
  timestamp: number;
}

export interface GeolocationError {
  code: number
  message: string
}

export interface Options {
  enableHighAccuracy: boolean
  maximumAge: number
  timeout: number
}

export interface WeatherResponse {
  coord: Coordinate;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: SystemInfo;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface Coordinate {
  lon: number;
  lat: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level?: number;
  grnd_level?: number;
}

export interface Wind {
  speed: number;
  deg: number;
  gust?: number;
}

export interface Clouds {
  all: number;
}

export interface SystemInfo {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface IQuote {
  price: number;
  volume_24h: number;
  last_updated: string;
}

