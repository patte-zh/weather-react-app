import React, { useState } from "react";
import "./WeatherUnits.css";
import axios from "axios";

export default function WeatherUnits(props) {
  const [units, setUnits] = useState("celsius");
  const [temperatureData, setTemperatureData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function fahrenheitUnits(event) {
    event.preventDefault();
    setUnits("fahrenheit");
  }
  function celsiusUnits(event) {
    event.preventDefault();
    setUnits("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (units === "celsius") {
    return (
      <div>
        <div className="tempDegrees">{props.celsius} </div>
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
        <div className="tempDegrees">{(props.celsius * 9) / 5 + 32} </div>
        <span className="temp-fahr">{fahrenheit()} </span>
        <a href="`#`" onClick={celsiusUnits}>
          ºC
        </a>{" "}
        <span>| ºF</span>
      </div>
    );
  }
}
