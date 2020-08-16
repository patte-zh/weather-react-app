import React, { useState } from "react";
import axios from "axios";
export default function Search(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [temperatureData, setTemperatureData] = useState({ ready: false });

  function handleInput(response) {
    setTemperatureData({
      ready: true,
      city: response.data.name,
    });
  }

  function search() {
    const apiKey = "9cd8a2246f79707c08b7050e7b412588";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleInput);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function newCity(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input
              className="form-control"
              id="city-input"
              type="text"
              placeholder="enter a city..."
              autoComplete="off"
              autoFocus="on"
              onChange={newCity}
            />
          </div>
          <div className="col-3">
            <button
              type="button"
              id="button-search"
              className="btn btn-outline-info"
            >
              search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
