import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import Facts from "./components/Facts";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Work from "./components/Work";
import PartnersAndClients from "./components/PartnersAndClients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import React from "react";

const App = () => {
  return (
    <div className="font-bold">
      <Navbar />
      <Hero />
      <Welcome />
      <Facts />
      <Projects />
      <Skills />
      <Team />
      <Testimonials />
      <Work />
      <PartnersAndClients />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
