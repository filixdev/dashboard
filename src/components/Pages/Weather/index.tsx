

import { useEffect, useState } from 'react'
import { GeolocationError, Options, WeatherResponse, GeolocationPosition } from './types'
import { getDate } from '../../../utils/date';
import { PlaceIcon } from '../../Icons/Icons';

export const Weather = () => {
  const [position, setPosition] = useState<GeolocationPosition | null>(null)
  const [weather, setWeather] = useState<WeatherResponse>()
  const [loading, setLoading] = useState<boolean>(true)

  const success = (position: GeolocationPosition) => {
    setPosition(position);
  };

  const error = (error: GeolocationError) => {
    console.log(`Error: " + ${error.code} + " " + ${error.message} + `);
  };

  useEffect(() => {
    const options: Options = {
      enableHighAccuracy: true,
      maximumAge: 30000,
      timeout: 30000,
    };

    if (!navigator.geolocation) {
      console.log('Geolocation is not supported by your browser')
    } else {
      navigator.geolocation.getCurrentPosition(success, error, options)
    }
  }, []);

  const fetchDataWeather = () => {
    if (position) {
      const lat = position.coords.latitude
      const lon = position.coords.longitude
      const API_KEY = import.meta.env.VITE_OPEN_WEATHER_MAP_KEY

      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
        .then(response => {
          return response.json()
        })
        .then(data => {
          setWeather(data)
          console.log(data, "data")
          setLoading(false)
        })
    }
  }

  useEffect(() => {
    fetchDataWeather()
  }, [position])

  console.log(weather, "weather")
  const tempo = weather?.weather || []
  const main = weather?.main
  const vento = weather?.wind
  const sys = weather?.sys

  return (
    <>
      <h1>Weather</h1>
      {loading ? (
        <p>Loading Position</p>
      ) : (
        <div>
          <p>Date: {getDate()}</p>
          {tempo.map((el, index) =>
            <div key={index}>
              <img src={`http://openweathermap.org/img/w/${el.icon}.png`} alt="icon" />
              <p>Main: {el?.main}</p>
              <p>Description: {el?.description}</p>
            </div>
          )}
          <p>Feels Like: {main?.feels_like}°C</p>
          <p>Humidity: {main?.humidity}%</p>
          <p>Pressure: {main?.pressure}</p>
          <p>Sea Level: {main?.sea_level}</p>
          <p>Temperature: {main?.temp}°C</p>
          <p>Max Temperature: {main?.temp_max}°C</p>
          <p>Min Temperature: {main?.temp_min}°C</p>
          <p>Wind Speed: {vento?.speed}</p>
          <p>Country: {sys?.country}</p>
          <p>Sunrise: {sys?.sunrise}</p>
          <p>Sunset: {sys?.sunset}</p>

          <PlaceIcon />
          <h2>Position</h2>
          <p>Latitude: {position?.coords.latitude}</p>
          <p>Longitude: {position?.coords.longitude}</p>
          <p>Accuracy: {position?.coords.accuracy}</p>
          <p>City: {weather?.name}</p>
        </div>
      )}
    </>
  )
}