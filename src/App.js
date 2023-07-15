import "./App.css";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import Slider from "./components/Slider/Slider";
import Virtual from "./components/Virtual/Virtual";
import Header from "./components/header/Header";
import Testimonails from "./components/Testimonials/Testimoinals";

/* eslint-disable */
import React, { Component } from "react";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Slider />
      <Virtual />
      <Products />
      <Testimonails />
      <Footer />
    </div>
  );
}

export default App;
