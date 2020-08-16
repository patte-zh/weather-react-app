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
      <Temperature defaultCity="Porto" />
      <br />
      <div className="row" id="forecast" />
      <Footer />
    </div>
  );
}
