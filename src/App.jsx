import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Element } from "react-scroll";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  Footer,
} from "./components";

const App = () => {
  return (
    <Router>
      <div className="app bg-black text-white min-h-screen">

        {/* Navbar */}
        <Navbar />

        {/* Hero */}
        <Element name="hero" id="hero">
          <Hero />
        </Element>

        {/* Sections */}
        <Element name="about" id="about"><About /></Element>
        <Element name="experience" id="experience"><Experience /></Element>
        <Element name="works" id="works"><Works /></Element>
        <Element name="tech" id="tech"><Tech /></Element>
        <Element name="feedbacks" id="feedbacks"><Feedbacks /></Element>

        <Element name="contact" id="contact">
          <Contact />
        </Element>

        {/* Footer */}
        <Footer />

      </div>
    </Router>
  );
};

export default App;