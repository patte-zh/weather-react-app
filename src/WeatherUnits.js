import React, { useState } from "react";
import "./WeatherUnits.css";
import axios from "axios";

export default function WeatherUnits(props) {
  const [units, setUnits] = useState("celsius");
  const [temperatureData, setTemperatureData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleInput(response) {
    setTemperatureData({
      ready: true,
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
    });
  }
  function search() {
    const apiKey = "9cd8a2246f79707c08b7050e7b412588";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleInput);
  }
  function fahrenheitUnits(event) {
    event.preventDefault();
    setUnits("fahrenheit");
    search();
  }
  function celsiusUnits(event) {
    event.preventDefault();
    setUnits("celsius");
    search();
  }

  function fahrenheit() {
    return props.temperature * 9 + 32;
  }

  if (units === `celsius`) {
    return (
      <div>
        <span className="tempDegrees">{props.temperature} </span>
        <span className="temp-celsius">
          ºC |
          <a href="`#`" onClick={fahrenheitUnits}>
            ºF
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <span className="tempDegrees">{props.temperature} </span>
        <span className="temp-fahr">{fahrenheit()} </span>
        <a href="`#`" onClick={celsiusUnits}>
          ºC
        </a>{" "}
        <span>| ºF</span>
      </div>
    );
  }
}
