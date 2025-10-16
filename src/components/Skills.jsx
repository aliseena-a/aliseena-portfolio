import React from "react";
import "./Skills.css";

export default function Skills() {
  const skills = [
    {
      title: "Languages",
      items: [
        "Java",
        "Python",
        "C/C++",
        "JavaScript",
        "TypeScript",
        "SQL (Postgres)",
        "HTML/CSS",
        "R",
        "Lua",
        "Assembly",
      ],
    },
    {
      title: "Frameworks & Libraries",
      items: [
        "React",
        "Vue.js",
        "Express.js",
        "FastAPI",
        "Flutter",
        "WordPress",
        "Material-UI",
        "Bulma",
        "jQuery",
        "D3.js",
        "pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "SciPy",
        "SymPy",
      ],
    },
    {
      title: "Developer Tools",
      items: [
        "Git",
        "Docker",
        "Node.js",
        "Firebase",
        "Google Cloud Platform",
        "VS Code",
        "PyCharm",
        "IntelliJ",
        "Eclipse",
        "CLion",
        "Android Studio",
      ],
    },
    {
      title: "Databases & Cloud",
      items: [
        "PostgreSQL",
        "MySQL",
        "Firebase Firestore",
        "MongoDB",
        "Google Cloud Platform",
        "Supabase",
      ],
    },
    {
      title: "Mobile & App Development",
      items: [
        "Flutter",
        "Dart",
        "Android Studio",
        "Firebase Auth",
        "Firestore",
        "RESTful APIs",
      ],
    },
    {
      title: "Data Science & Visualization",
      items: [
        "pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "SciPy",
        "Jupyter Notebook",
        "D3.js",
      ],
    },
  ];

  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((category, index) => (
          <div className="skill-card" key={index}>
            <h3>{category.title}</h3>
            <ul>
              {category.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
