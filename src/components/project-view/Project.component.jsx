import React from "react";
import "./Project.style.css";

export const ProjectComponent = ({
  id,
  projectTitle,
  projectUrl,
  projectDescription,
  imageUrl,
  linkId,
  descId,
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
            id={linkId}
            className="project-link"
            href={projectUrl}
            target="_blank"
            rel="noreferrer"
          >
            <p className="project-title">{projectTitle} </p>
            <span class="north-east-arrow">&#10132;</span>
          </a>
        </div>
        <div id={descId} className="project-description">
          <p>{projectDescription}</p>
        </div>
      </div>
    </div>
  );
};
