import React from "react";
import { projects } from "./projectInfo";

function Projects() {
  return (
    <ul className="projects">
      {Object.keys(projects).map((i) => (
        <li>
          <a href={projects[i]?.alink} target="_blank" rel="noreferrer">
            {i}
          </a>
          <img src={projects[i].thumbnail} alt={i} />
          <span>{projects[i].tech}</span>
        </li>
      ))}
    </ul>
  );
}

export default Projects;
