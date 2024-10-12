// src/components/WeatherCard.jsx
import React, { useState } from 'react';
import '../scss/WeatherCard.scss';
import sunnyImage from '../assets/img/sunny.jpg';
import cloudyImage from '../assets/img/cloudy.jpg';
import rainyImage from '../assets/img/rainy.jpg';
import snowyImage from '../assets/img/snowy.jpg';

const WeatherCard = ({ weatherData, onCityChange }) => {
  const [inputCity, setInputCity] = useState('');
  const temp = Math.round(weatherData.main.temp);

  // Select the weather image based on temperature
  let weatherImage = temp > 25 ? sunnyImage : temp > 15 ? cloudyImage : temp > 0 ? rainyImage : snowyImage;

  const handleSearch = () => {
    if (inputCity) onCityChange(inputCity);
  };

  return (
    <div className="weather-card">
      <div className="left-half">
        <input
          type="text"
          placeholder="Search city..."
          value={inputCity}
          onChange={(e) => setInputCity(e.target.value)}
          className="search-bar"
        />
        <button onClick={handleSearch}>Search</button>
        <div className="info">
          <h2>{weatherData.name}</h2>
          <p>Temperature: {temp}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Visibility: {(weatherData.visibility / 1000).toFixed(1)} km</p>
        </div>
      </div>
      <div
        className="right-half"
        style={{
          backgroundImage: `url(${weatherImage})`
        }}
      />
    </div>
  );
};

export default WeatherCard;
