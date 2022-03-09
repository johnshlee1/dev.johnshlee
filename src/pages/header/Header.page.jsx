import React from "react";
import projects_data from "../../projects.data.json";

import "./Header.style.css";

export const Header = () => {
  return (
    <header
      id="header"
      className="site-header"
      data-color={projects_data.header_color}
      data-backcolor={projects_data.header_background_color}
    >
      <div className="site-title">
        <div>{projects_data.site_title}</div>
        <div>{projects_data.job_title}</div>
      </div>
      <span id="email" className="email">
        {projects_data.email}
      </span>
    </header>
  );
};
