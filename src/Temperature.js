import React from "react";
import "./temperature.css";

export default function temperature() {
  return (
    <div>
      <span className="tempDegrees" id="temperature">
        28{" "}
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
        humidity: 15 %
      </div>
      <div className="wind" id="wind">
        wind: 5 km/h
      </div>
    </div>
  );
}
