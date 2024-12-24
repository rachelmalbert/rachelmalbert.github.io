import "../styles/Projects.css";

import React from "react";
import "../styles/Projects.css";

const projects = [
  {
    title: "Reading Progress Tracker",
    image: "/images/lights.jpg",
    description:
      "Full stack web application that lets users curate their library, set goals, and track reading progress with visualizations to stay on target.",
    github: "https://github.com/your-username/project1", // Replace with your GitHub link
    website: "https://project1.com", // Replace with your website link
  },
  {
    title: "Instacart Shopper Tool",
    image: "/images/lights.jpg",
    description:
      "An Instacart shopper tool that uses real-time route data from Google to calculate drive time and estimate hourly pay before accepting an order.",
    github: "https://github.com/your-username/project2", // Replace with your GitHub link
    website: "https://project2.com", // Replace with your website link
  },
  {
    title: "SignAble - Learn American Sign Language",
    image: "/images/lights.jpg",
    description:
      "ASL learning application that offers gesture recognition and real-time feedback.",
    github: "https://github.com/your-username/project3", // Replace with your GitHub link
    website: "https://project3.com", // Replace with your website link
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((project) => (
          <div className="project" key={project.id}>
            <div className="project-image-container">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            </div>
            <div className="project-details">
              <h3>{project.title}</h3>
              {/* <h3>Reading Progress Tracker</h3> */}
              <p>{project.description}</p>
              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  GitHub
                </a>
                <a
                  href={project.liveSite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Live Site
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
