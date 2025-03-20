import React from "react";
import "./project.css";

function Project({ title, image, deployed, github }) {
  return (
    <div className="project">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <a href={deployed} target="_blank" rel="noopener noreferrer">Live App</a>
      <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
    </div>
  );
}

export default Project;
