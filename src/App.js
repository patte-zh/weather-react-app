import React from "react";

import Footer from "./Footer";
import Search from "./Search";
import "bootstrap/dist/css/bootstrap.css";
import ReactAnimatedWeather from "react-animated-weather";
import Temperature from "./Temperature";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h2 className="city"> {} </h2>
      <div className="icon">
        <ReactAnimatedWeather
          icon="CLEAR_DAY"
          color="goldenrod"
          size={84}
          animate="true"
        />
      </div>
      <Temperature defaultCity="Lisbon" />
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
