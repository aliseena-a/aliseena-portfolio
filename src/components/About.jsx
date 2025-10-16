import React from "react";
import "./About.css";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          I'm a third-year Computer Science student at 
          <strong> Ontario Tech University</strong>. I’m passionate about creating 
          impactful software and exploring the many areas of computer science.
        </p>
        <p>
          I enjoy developing web applications, analyzing data, and solving technical 
          challenges through clean, efficient code. I’m especially interested in 
          <strong> software engineering</strong> and <strong>data-driven development</strong>, 
          where I can combine creativity with logic to build meaningful solutions.
        </p>
        <p>
          Outside of coding, I’m constantly learning new tools and frameworks, working on 
          side projects, and expanding my skill set to grow as both a developer and problem-solver.
        </p>

        <a href="#projects" className="about-btn">
          View My Projects
        </a>
      </div>
    </section>
  );
}
