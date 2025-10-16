import React, { useState, useEffect } from "react";
import "./Hero.css";
import bgVideo from "../assets/bg.mp4";
import profileImage from "../assets/me.jpg";

export default function Hero() {
  const [animate, setAnimate] = useState(false);

  // Trigger animations after mount
  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 500); // small initial delay before fade-in
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero" id="hero">
      <video className="hero-bg" autoPlay loop muted playsInline>
        <source src={bgVideo} type="video/mp4" />
      </video>

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <div className={`hero-text ${animate ? "animate-text" : ""}`}>
          <h1>Hi, I’m <span>Aliseena Ahmar</span></h1>
          <p>Computer Science | Building with creativity and purpose.</p>
        </div>
        <div className={`hero-image ${animate ? "animate-image" : ""}`}>
          <img src={profileImage} alt="Aliseena Ahmar" />
        </div>
      </div>
    </section>
  );
}
