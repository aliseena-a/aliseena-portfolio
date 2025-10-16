import React from "react";
import "./Projects.css";
import mmadata from "../assets/MMAdata_project.JPG";
import digibox from "../assets/digibox_project.JPG";
import outfy from "../assets/outfy_project.png";
import mmadataLogo from "../assets/mmadata_logo.png";
import digiboxLogo from "../assets/digibox_logo.JPG";

// project data
const projects = [
  {
    id: 1,
    title: "MMAData",
    description:
      "An analysis and visualization of MMA fight data using Python, Matplotlib, and Pandas.",
    link: "https://mmadata.streamlit.app/",
    logo: mmadataLogo,
    preview: mmadata,
  },
  {
    id: 2,
    title: "DigiBox",
    description:
      "Custom file storage system built using everything that me and my group have learned in my Web Development course, such as Vue, Express.js, D3, web services and more.",
    link: "https://github.com/aliseena-a/DigiBox",
    logo: digiboxLogo,
    preview: digibox,
  },
  {
    id: 3,
    title: "OUTFY",
    description:
      "A mobile fashion catalog application that allows users to browse, search, and save their favorite items, like a shopping application.",
    link: "#",
    logo: outfy,
    preview: null, // no preview yet
  },
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img src={project.logo} alt={`${project.title} logo`} className="default-img" />
              {project.preview ? (
                <img
                  src={project.preview}
                  alt={`${project.title} preview`}
                  className="hover-img"
                />
              ) : (
                <div className="no-preview">Preview Coming Soon</div>
              )}
            </div>

            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
