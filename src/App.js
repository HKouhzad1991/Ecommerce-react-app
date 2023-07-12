import "./App.css";
import Hero from "./components/Hero/Hero";
import Slider from "./components/Slider/Slider";
import Header from "./components/header/Header";
/* eslint-disable */
import React, { Component } from "react";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Slider />
    </div>
  );
}

export default App;
