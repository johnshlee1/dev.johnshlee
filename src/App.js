import React from "react";

import { Header } from "./pages/header/Header.page";
import { ProjectComponent } from "./components/project-view/Project.component";
import { AboutPage } from "./pages/about/About.page";
import projects_data from "./projects.data.json";
import { changeColor } from "./utils/ChangeColor";

import talk_and_progress from "./images/talkandprogress.png";
import archive_johnshlee from "./images/archive.johnshlee.png";
import philosophight from "./images/philosophight.png";
import conscious_breakers from "./images/conscious-breakers.png";
import post_design_festival from "./images/post.design.png";

import "./App.css";

function App() {
  changeColor();

  return (
    <div id="site" className="site">
      <Header
        color={projects_data.header_color}
        backgroundColor={projects_data.header_background_color}
      />

      <ProjectComponent
        id={projects_data.talk_and_progress_project_id}
        projectTitle={projects_data.talk_and_progress_project_title}
        projectUrl={projects_data.talk_and_progress_project_url}
        projectDescription={projects_data.talk_and_progress_project_description}
        imageUrl={talk_and_progress}
        linkId={projects_data.talk_and_progress_project_link}
        descId={projects_data.talk_and_progress_project_desc}
        color={projects_data.talk_and_progress_project_color}
        backgroundColor={
          projects_data.talk_and_progress_project_background_color
        }
      />
      <ProjectComponent
        id={projects_data.archive_johnshlee_project_id}
        projectTitle={projects_data.archive_johnshlee_project_title}
        projectUrl={projects_data.archive_johnshlee_project_url}
        projectDescription={projects_data.archive_johnshlee_project_description}
        imageUrl={archive_johnshlee}
        linkId={projects_data.archive_johnshlee_project_link}
        descId={projects_data.archive_johnshlee_project_desc}
        color={projects_data.archive_johnshlee_project_color}
        backgroundColor={
          projects_data.archive_johnshlee_project_background_color
        }
      />
      <ProjectComponent
        id={projects_data.philosophight_project_id}
        projectTitle={projects_data.philosophight_project_title}
        projectUrl={projects_data.philosophight_project_url}
        projectDescription={projects_data.philosophight_project_description}
        imageUrl={philosophight}
        linkId={projects_data.philosophight_project_link}
        descId={projects_data.philosophight_project_desc}
        color={projects_data.philosophight_project_color}
        backgroundColor={projects_data.philosophight_project_background_color}
      />
      <ProjectComponent
        id={projects_data.post_design_festival_project_id}
        projectTitle={projects_data.post_design_festival_project_title}
        projectUrl={projects_data.post_design_festival_project_url}
        projectDescription={
          projects_data.post_design_festival_project_description
        }
        imageUrl={post_design_festival}
        linkId={projects_data.post_design_festival_project_link}
        descId={projects_data.post_design_festival_project_desc}
        color={projects_data.post_design_festival_project_color}
        backgroundColor={
          projects_data.post_design_festival_project_background_color
        }
      />
      <ProjectComponent
        id={projects_data.conscious_breakers_project_id}
        projectTitle={projects_data.conscious_breakers_project_title}
        projectUrl={projects_data.conscious_breakers_project_url}
        projectDescription={
          projects_data.conscious_breakers_project_description
        }
        imageUrl={conscious_breakers}
        linkId={projects_data.conscious_breakers_project_link}
        descId={projects_data.conscious_breakers_project_desc}
        color={projects_data.conscious_breakers_project_color}
        backgroundColor={
          projects_data.conscious_breakers_project_background_color
        }
      />

      <AboutPage
        color={projects_data.about_color}
        backgroundColor={projects_data.about_background_color}
      />
    </div>
  );
}

export default App;
