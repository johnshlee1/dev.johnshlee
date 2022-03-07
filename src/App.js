import React from "react";

import { Header } from "./pages/header/Header.page";
import { ProjectComponent } from "./components/project-view/Project.component";
import { BioPage } from "./pages/about/About.page";
import projects_data from "./projects.data.json";

import talk_and_progress from "./images/talkandprogress.png";
import archive_johnshlee from "./images/archive.johnshlee.png";
import philosophight from "./images/philosophight.png";
import conscious_breakers from "./images/conscious-breakers.png";
import post_design_festival from "./images/post.design.png";

import "./App.css";

function App() {
  return (
    <div className="site">
      <Header />

      <ProjectComponent
        projectTitle={projects_data.talk_and_progress_project_title}
        projectUrl={projects_data.talk_and_progress_project_url}
        projectDescription={projects_data.talk_and_progress_project_description}
        imageUrl={talk_and_progress}
      />
      <ProjectComponent
        projectTitle={projects_data.archive_johnshlee_project_title}
        projectUrl={projects_data.archive_johnshlee_project_url}
        projectDescription={projects_data.archive_johnshlee_project_description}
        imageUrl={archive_johnshlee}
      />
      <ProjectComponent
        projectTitle={projects_data.philosophight_project_title}
        projectUrl={projects_data.philosophight_project_url}
        projectDescription={projects_data.philosophight_project_description}
        imageUrl={philosophight}
      />
      <ProjectComponent
        projectTitle={projects_data.post_design_festival_project_title}
        projectUrl={projects_data.post_design_festival_project_url}
        projectDescription={
          projects_data.post_design_festival_project_description
        }
        imageUrl={post_design_festival}
      />
      <ProjectComponent
        projectTitle={projects_data.conscious_breakers_project_title}
        projectUrl={projects_data.conscious_breakers_project_url}
        projectDescription={
          projects_data.conscious_breakers_project_description
        }
        imageUrl={conscious_breakers}
      />

      <BioPage />
    </div>
  );
}

export default App;
