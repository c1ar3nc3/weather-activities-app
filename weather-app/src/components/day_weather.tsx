import React, { useState } from "react";
import { fetchWeather } from "../api/fetchWeather";
// import "./day_weather.css";

const DayWeather = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({
    coord: {
      lon: Number,
      lat: Number,
    },
    weather: [
      {
        id: Number,
        main: String,
        description: "description",
        icon: String,
      },
    ],
    base: String,
    main: {
      temp: 5,
    },
    visibility: 0,
    wind: {},
    clouds: {},
    dt: 0,
    sys: {
      type: 0,
      id: 0,
      country: String,
      sunrise: 0,
      sunset: 0,
    },
    timezone: 0,
    id: 0,
    name: String,
    cod: 0,
  });

  const search = async (e: any) => {
    if (e.key == "Enter") {
      const data = await fetchWeather(query);
      setWeather(data);
      setQuery("");
    }
  };

  return (
    <div className="main-container">
      <input
        type="text"
        className="search"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={search}
      />
      {weather.main && (
        <div className="city">
          <h2 className="city-name">
            <span>{weather.name}</span>
            <sup>{weather.sys.country}</sup>
          </h2>
          <div className="city-temp">
            {Math.round(weather.main.temp)}
            <sup>&deg;C</sup>
          </div>
          <div className="info">
            <img
              className="city-icon"
              src="{'https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png'}"
              alt="{weather.weather[0].description}"
            />
            <p>{weather.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DayWeather;

// {"coord":{"lon":-123.1193,"lat":49.2497},"weather":[{"id":601,"main":"Snow","description":"snow","icon":"13d"}],"base":"stations","main":{"temp":-0.85,"feels_like":-5.25,"temp_min":-1.11,"temp_max":-0.56,"pressure":1011,"humidity":93},"visibility":2414,"wind":{"speed":3.09,"deg":120},"snow":{"1h":0.75},"clouds":{"all":90},"dt":1613247890,"sys":{"type":1,"id":954,"country":"CA","sunrise":1613229864,"sunset":1613266150},"timezone":-28800,"id":6173331,"name":"Vancouver","cod":200}
