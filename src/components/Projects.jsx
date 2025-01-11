import "../styles/Projects.css";

import React from "react";

const projects = [
  {
    title: "Reading Progress Tracker",
    image: "/images/dashboard.png",
    description:
      "Full stack web application that lets users set reading goals, curate their library, and track progress with visualizations to stay on target.",
    github: "https://github.com/rachelmalbert/reading-goals.git",
    website: "https://www.readinggoals.info",
  },
  {
    title: "Learn American Sign Language",
    image: "/images/signable.png",
    description: "ASL learning application that offers gesture recognition and real-time feedback.",
    github: "",
    website: "",
  },
  {
    title: "Instacart Shopper Tool",
    image: "/images/shopper.png",
    description:
      "An Instacart shopper tool that uses real-time route data from Google to calculate drive time and estimate hourly pay before accepting an order.",
    github: "https://github.com/rachelmalbert/shopper.git",
    website: "",
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
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
            <div className="project-details">
              <h3>{project.title}</h3>
              {/* <h3>Reading Progress Tracker</h3> */}
              <p>{project.description}</p>
              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    GitHub
                  </a>
                )}
                {project.website && (
                  <a href={project.website} target="_blank" rel="noopener noreferrer" className="project-link">
                    Live Site
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
