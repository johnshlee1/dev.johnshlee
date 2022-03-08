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
          <p className="project-title">{projectTitle} </p>
          <svg
            className="north-east-arrow"
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            // height="24"
            viewBox="0 0 24 24"
            // width="24"
          >
            <rect fill="none" height="24" width="24" />
            <path d="M9,5v2h6.59L4,18.59L5.41,20L17,8.41V15h2V5H9z" />
          </svg>
        </a>
      </div>
      <div className="project-description">
        <p>{projectDescription}</p>
      </div>
    </div>
  </div>
);
