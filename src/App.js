import React from "react";

import Footer from "./Footer";
import Search from "./Search";
import ReactAnimatedWeather from "react-animated-weather";
import Temperature from "./Temperature";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1 className="date"> Monday, 13:05 </h1>
      <h2 className="city"> Porto </h2>
      <ReactAnimatedWeather
        icon="CLEAR_DAY"
        color="goldenrod"
        size={84}
        animate="true"
      />
      <Temperature />
      <br />
      <h3>Clear sky</h3>
      <img src="" alt="" id="icon" />
      <hr />
      <Search />
      <br />
      <div className="row" id="forecast" />
      <Footer />
    </div>
  );
}
