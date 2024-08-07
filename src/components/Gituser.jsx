import React, { useState } from 'react'
import useWeather from '../customhook/CustomHook'

const WeatherComponent = () => {
  const [city, setCity] = useState('London')
  const { weather, loading, error } = useWeather(city)

  const handleCityChange = (event) => {
    setCity(event.target.value)
  }

  return (
    <div>
      <h1>Weather Information</h1>
      <input
        type="text"
        value={city}
        onChange={handleCityChange}
        placeholder="Enter city name"
      />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>{weather.weather[0].description}</p>
          <p>Temperature: {(weather.main.temp - 273.15).toFixed(2)}°C</p>
        </div>
      )}
    </div>
  )
}

export default WeatherComponent
