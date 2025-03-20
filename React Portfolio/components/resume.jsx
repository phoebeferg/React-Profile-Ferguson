import React from "react";
import "./resume.css";

function Resume() {
  return (
    <section className="resume">
      <a href="/path-to-resume.pdf" download className="resume-download">Download Resume</a>
      <h2>Proficiencies</h2>
      <ul>
        <li>HTML, CSS, JavaScript</li>
        <li>React.js, Node.js</li>
        <li>Express.js</li>
        <li>Git, GitHub</li>
      </ul>
    </section>
  );
}

export default Resume;
