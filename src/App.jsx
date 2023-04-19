import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Facts from "./components/Facts";
import Welcome from "./components/Welcome";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Work from "./components/Work";
import PartnersAndClients from "./components/PartnersAndClients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import React from "react";
import ParallaxTrial from "./components/parallax";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Parallax2 from "./components/Parallax2";

const App = () => {
  return (
    <div className="mx-[] font-body">
      <Navbar />
      <Hero />
      <Welcome />
      <Facts />
      <Projects />
      {/* <Parallax2 /> */}
      <Skills />
      <Team />
      <Testimonials />
      <Work />
      <PartnersAndClients />
      <Contact />
      <Footer />
      {/* <ParallaxTrial /> */}
    </div>
  );
};

export default App;
