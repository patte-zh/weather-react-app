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
      <div className="icon">
        <ReactAnimatedWeather
          icon="CLEAR_DAY"
          color="goldenrod"
          size={84}
          animate="true"
        />
      </div>
      <Temperature defaultCity="Porto" />
      <br />
      <div className="row" id="forecast" />
      <Footer />
    </div>
  );
}
