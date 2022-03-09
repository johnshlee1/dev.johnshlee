import React from "react";
import projects_data from "../../projects.data.json";

import "./About.style.css";

export const AboutPage = () => (
  <div
    id="about"
    className="about-page-container"
    data-color={projects_data.about_color}
    data-backcolor={projects_data.about_background_color}
  >
    <div className="about-text">{projects_data.about_text}</div>

    <div className="external-links">
      <div className="artist-website-container">
        <a
          className="artist-website-url"
          href="https://johnshlee.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Artist website
        </a>
        <span class="north-east-arrow">&#10132;</span>
      </div>

      <div className="design-credit">
        Web design:{" "}
        <div className="formal-settings-container">
          <a
            className="formal-settings-url"
            href="http://formal-settings.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Formal Settings
          </a>
          <span class="north-east-arrow">&#10132;</span>
        </div>
      </div>
    </div>
  </div>
);
