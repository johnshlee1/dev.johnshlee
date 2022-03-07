import React from "react";
import "./Project.style.css";

export const ProjectComponent = ({
  projectTitle,
  projectUrl,
  projectDescription,
  imageUrl,
}) => (
  <div className="project-container">
    <div className="project-image-container">
      <img className="project-image" alt="project" src={imageUrl} />
    </div>
    <div className="project-text-container">
      <div className="project-title-container">
        <a
          className="project-link"
          href={projectUrl}
          target="_blank"
          rel="noreferrer"
        >
          <p className="project-title">{projectTitle}</p>
          <i className="fa fa-arrow"></i>
        </a>
      </div>
      <div className="project-description">
        <p>{projectDescription}</p>
      </div>
    </div>
  </div>
);
