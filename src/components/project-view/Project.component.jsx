import React from "react";
import "./Project.style.css";

export const ProjectComponent = ({
  id,
  projectTitle,
  projectUrl,
  projectDescription,
  imageUrl,
  color,
  backgroundColor,
}) => {
  return (
    <div
      id={id}
      className="project-container"
      data-color={color}
      data-backcolor={backgroundColor}
    >
      <div className="project-image-container">
        <a href={projectUrl} target="_blank" rel="noreferrer">
          <img className="project-image" alt="project" src={imageUrl} />
        </a>
      </div>
      <div className="project-text-container">
        <div className="project-title-container">
          <a
            className="project-link"
            href={projectUrl}
            target="_blank"
            rel="noreferrer"
          >
            {projectTitle}
            <span class="north-east-arrow">&#10132;</span>
          </a>
        </div>
        <div className="project-description">{projectDescription}</div>
      </div>
    </div>
  );
};
