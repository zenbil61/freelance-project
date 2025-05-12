// src/App.jsx
import React from "react";
// import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import Header from "./components/HeaderV2";
import NewsAndProject from "./components/NewsAndProject";
import SimpleSlider from "./components/SimpleSlider";
import Count from "./components/Count";

import MusicLibrary from "./components/MusicLibrary";
import Card from "./components/Card";


import MySwiper from "./components/MySwiper";
import HeaderSwiper from "./components/HeaderSwiper";
import ProfileCardSwiper from "./components/ProfileCardSwiper";

import References from "./components/References";
import ReferencesV2 from "./components/ReferencesV2";
import NewsTimeline from "./components/NewsTimeline";
import ContactHome from "./components/ContactHome";

export default function App() {
  return (
    <div className="overflow-x-hidden">
      {/* Floating Login Form örneği */}
      {/* <Navbar /> */}
      <HeaderSwiper />
      {/* <ContactHome /> */}
      <MySwiper />

      <About />

      {/* <SimpleSlider /> */}

      {/* <MusicLibrary /> */}
      <ProfileCardSwiper />
      {/* <MySwiper2 /> */}

      <Count />
      {/* <References /> */}

      <ReferencesV2 />
      {/* Cardlar */}

      {/* <Hero /> */}
      {/* <Services /> */}
      {/* <Contact /> */}
      <NewsAndProject />
    </div>
  );
}
