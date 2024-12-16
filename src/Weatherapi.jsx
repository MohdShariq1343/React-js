import React, { useEffect, useState } from 'react';

const Weatherapi = () => {
  const [weather, setWeather] = useState(null); // Weather data
  const [city, setCity] = useState('lucknow'); // Default city
  const [inputCity, setInputCity] = useState('lucknow'); // Input field value
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch weather data whenever the city changes
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.allorigins.win/get?url=${encodeURIComponent(
        `https://api.weatherapi.com/v1/current.json?key=c17533f87c4c47d4a9461125242811&q=${city}&aqi=yes`
      )}`
    )
      .then((response) => response.json())
      .then((data) => {
        const weatherData = JSON.parse(data.contents); // Parse the nested JSON
        setWeather(weatherData);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error:', err);
        setError('Unable to fetch weather data');
        setLoading(false);
      });
  }, [city]); 

  const handleCityChange = (e) => {
    e.preventDefault();
    setCity(inputCity); 
  };

  
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!weather) {
    return <div>No data available</div>;
  }

  return (
    <div>
      <h3>Weather in {weather.location.name}, {weather.location.country}</h3>
      
      {/* Weather information */}
      <p>Temperature: {weather.current.temp_c}°C</p>
      <p>Condition: {weather.current.condition.text}</p>
      <img
        src={`https:${weather.current.condition.icon}`}
        alt={weather.current.condition.text}
      />
      <p>Wind Speed: {weather.current.wind_kph} kph</p>
      <p>Humidity: {weather.current.humidity}%</p>

      {/* Input form to change city */}
      <form onSubmit={handleCityChange}>
        <input
          type="text"
          value={inputCity}
          onChange={(e) => setInputCity(e.target.value)} 
          placeholder="Enter city"
        />
        <button type="submit">Get Weather</button>
      </form>
    </div>
  );
};

export default Weatherapi;
