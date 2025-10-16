import React from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects"; 
import Navbar from "./components/Navbar"; 
import Contact from "./components/Contact";
import About from "./components/About";
import Skills from "./components/Skills";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Projects /> {/* Scrolls over the fixed background */}
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
