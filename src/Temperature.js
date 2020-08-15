import React, { useState } from "react";
import axios from "axios";
import "./temperature.css";
import RealDate from "./RealDate";

export default function Temperature(props) {
  const [temperatureData, setTemperatureData] = useState({ ready: false });
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
    });
  }

  if (temperatureData.ready) {
    return (
      <div>
        <h1 className="date">
          {" "}
          <RealDate date={temperatureData.date} />{" "}
        </h1>
        <span className="tempDegrees" id="temperature">
          {temperatureData.temperature}{" "}
        </span>
        <span className="temp-celcius">
          <a href="`#`" id="celsius-link">
            ºC
          </a>{" "}
          |
          <a href="`#`" id="fahrenheit-link">
            ºF
          </a>
        </span>
        <p id="description" />
        <div className="humidity" id="humidity">
          humidity: {temperatureData.humidity} %
        </div>
        <div className="wind" id="wind">
          wind: {temperatureData.wind} km/h
        </div>
      </div>
    );
  } else {
    const apiKey = "9cd8a2246f79707c08b7050e7b412588";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleInput);

    return "Loading...";
  }
}
