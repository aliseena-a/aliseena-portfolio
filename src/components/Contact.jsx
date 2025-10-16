import React from "react";
import "./Contact.css";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-content">
        <h2>Contact Me</h2>
        <p>Feel free to reach out through any of the platforms below.</p>

        <div className="contact-links">
          <a
            href="mailto:aliseena.ahmar@ontariotechu.net"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/aliseena-a"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/aliseena"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Footer section */}
      <footer className="footer">
        © {new Date().getFullYear()} <strong>Aliseena Ahmar</strong>. All rights reserved.
      </footer>
    </section>
  );
}
