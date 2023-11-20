import React, { useState } from "react";
import axios from "axios";
import "./sampleweather.css"

function Sampleweather() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const apiId = "f00c38e0279b7bc85480c3fe775d518c";
  const [currentDate] = useState(new Date());
  const handleChange = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiId}`
      )
      .then((resp) => {
        setWeatherData(resp.data);
        console.log(resp.data);
      });
  };

  return (
    <div className="body">
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleChange}>Search</button>
      <p>Temperature: {weatherData && weatherData.main.temp} °K</p>
      <p>pressure: {weatherData && weatherData.main.pressure} </p>
      <p>Humidity: {weatherData && weatherData.main.humidity} </p>
      <p>Description: {weatherData && weatherData.weather[0].description} </p>
      <p>current:{currentDate && currentDate.toString()}</p>
    </div>
  );
}

export default Sampleweather;