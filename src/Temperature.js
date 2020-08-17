import React, { useState } from "react";
import axios from "axios";
import "./temperature.css";
import RealDate from "./RealDate";
import Search from "./Search";
import WeatherIcon from "./WeatherIcon";
import WeatherUnits from "./WeatherUnits";

export default function Temperature(props) {
  const [temperatureData, setTemperatureData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleInput(response) {
    console.log(response.data);
    setTemperatureData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
    });
  }

  if (temperatureData.ready) {
    return (
      <div>
        <h1 className="date">
          {" "}
          <RealDate date={temperatureData.date} />{" "}
        </h1>
        <h2>{temperatureData.city} </h2>
        <WeatherIcon code={temperatureData.icon} />
        <WeatherUnits celsius={temperatureData.temperature} />

        <p id="description" />
        <div className="humidity" id="humidity">
          humidity: {temperatureData.humidity} %
        </div>
        <div className="wind" id="wind">
          wind: {Math.round(temperatureData.wind)} km/h
        </div>
        <br />
        <h3>{temperatureData.description} </h3>
        <img src="" alt="" id="icon" />
        <hr />
        <Search city={temperatureData.city} />
      </div>
    );
  } else {
    const apiKey = "9cd8a2246f79707c08b7050e7b412588";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleInput);
    return "Loading...";
  }
}
