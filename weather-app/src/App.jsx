// src/App.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import WeatherCard from './components/WeatherCard';
import './App.css';

const App = () => {
  const [city, setCity] = useState('New York'); // Default city
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = 'a3b6b07b7dc77c0764df61c7cf6b2d02';

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error("Error fetching weather data", error);
      }
    };

    fetchWeatherData();
  }, [city]);

  const handleCityChange = (newCity) => {
    setCity(newCity);
  };

  return (
    <div className="app">
      <Header />
      {weatherData && (
        <WeatherCard weatherData={weatherData} onCityChange={handleCityChange} />
      )}
    </div>
  );
};

export default App;
