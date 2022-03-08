import projects_data from "../projects.data.json";

export const changeColor = () => {
  window.addEventListener("scroll", () => {
    const header = document.getElementById("header"),
      talkAndProgress = document.getElementById(
        projects_data.talk_and_progress_project_id
      ),
      archiveJohnshlee = document.getElementById(
        projects_data.archive_johnshlee_project_id
      ),
      philosophight = document.getElementById(
        projects_data.philosophight_project_id
      ),
      postDesignFestival = document.getElementById(
        projects_data.post_design_festival_project_id
      ),
      consciousBreakers = document.getElementById(
        projects_data.conscious_breakers_project_id
      ),
      about = document.getElementById("about");

    const headerHeight = header.scrollHeight,
      talkAndProgressHeight = talkAndProgress.scrollHeight,
      archiveJohnshleeHeight = archiveJohnshlee.scrollHeight,
      philosophightHeight = philosophight.scrollHeight,
      postDesignFestivalHeight = postDesignFestival.scrollHeight,
      consciousBreakersHeight = consciousBreakers.scrollHeight;

    const headerColor = header.getAttribute("data-color"),
      talkAndProgressColor = talkAndProgress.getAttribute("data-color"),
      archiveJohnshleeColor = archiveJohnshlee.getAttribute("data-color"),
      philosophightColor = philosophight.getAttribute("data-color"),
      postDesignFestivalColor = postDesignFestival.getAttribute("data-color"),
      consciousBreakersColor = consciousBreakers.getAttribute("data-color"),
      aboutColor = about.getAttribute("data-color");

    const headerBackColor = header.getAttribute("data-backcolor"),
      talkAndProgressBackColor = talkAndProgress.getAttribute("data-backcolor"),
      archiveJohnshleeBackColor =
        archiveJohnshlee.getAttribute("data-backcolor"),
      philosophightBackColor = philosophight.getAttribute("data-backcolor"),
      postDesignFestivalBackColor =
        postDesignFestival.getAttribute("data-backcolor"),
      consciousBreakersBackColor =
        consciousBreakers.getAttribute("data-backcolor"),
      aboutBackColor = about.getAttribute("data-backcolor");

    if (window.pageYOffset <= headerHeight) {
      document.getElementById("site").style.color = headerColor;
      document.getElementById("site").style.backgroundColor = headerBackColor;
    }
    if (window.pageYOffset >= headerHeight * 0.75) {
      document.getElementById(
        projects_data.talk_and_progress_project_link
      ).style.color = talkAndProgressColor;
      document.getElementById(
        projects_data.talk_and_progress_project_desc
      ).style.color = talkAndProgressColor;
      document.getElementById("site").style.backgroundColor =
        talkAndProgressBackColor;
    }
    if (window.pageYOffset >= headerHeight + talkAndProgressHeight * 0.75) {
      document.getElementById(
        projects_data.archive_johnshlee_project_link
      ).style.color = archiveJohnshleeColor;
      document.getElementById(
        projects_data.archive_johnshlee_project_desc
      ).style.color = archiveJohnshleeColor;
      document.getElementById("site").style.backgroundColor =
        archiveJohnshleeBackColor;
    }
    if (
      window.pageYOffset >=
      headerHeight + talkAndProgressHeight + archiveJohnshleeHeight * 0.75
    ) {
      document.getElementById(
        projects_data.philosophight_project_link
      ).style.color = philosophightColor;
      document.getElementById(
        projects_data.philosophight_project_desc
      ).style.color = philosophightColor;
      document.getElementById("site").style.backgroundColor =
        philosophightBackColor;
    }
    if (
      window.pageYOffset >=
      headerHeight +
        talkAndProgressHeight +
        archiveJohnshleeHeight +
        philosophightHeight * 0.75
    ) {
      document.getElementById(
        projects_data.post_design_festival_project_link
      ).style.color = postDesignFestivalColor;
      document.getElementById(
        projects_data.post_design_festival_project_desc
      ).style.color = postDesignFestivalColor;
      document.getElementById("site").style.backgroundColor =
        postDesignFestivalBackColor;
    }
    if (
      window.pageYOffset >=
      headerHeight +
        talkAndProgressHeight +
        archiveJohnshleeHeight +
        philosophightHeight +
        postDesignFestivalHeight * 0.75
    ) {
      document.getElementById(
        projects_data.conscious_breakers_project_link
      ).style.color = consciousBreakersColor;
      document.getElementById(
        projects_data.conscious_breakers_project_desc
      ).style.color = consciousBreakersColor;
      document.getElementById("site").style.backgroundColor =
        consciousBreakersBackColor;
    }
    if (
      window.pageYOffset >=
      headerHeight +
        talkAndProgressHeight +
        archiveJohnshleeHeight +
        philosophightHeight +
        postDesignFestivalHeight +
        consciousBreakersHeight * 0.75
    ) {
      document.getElementById("about").style.color = aboutColor;
      document.getElementById("site").style.backgroundColor = aboutBackColor;
    }
  });
};
