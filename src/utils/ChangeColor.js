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

    const changeTextColor = (elemId, textColor) => {
      document.getElementById(elemId).style.color = textColor;
    };

    const changeSiteBackgroundColor = (backgroundColor) => {
      document.getElementById("site").style.backgroundColor = backgroundColor;
    };

    if (window.pageYOffset <= headerHeight) {
      changeTextColor("site", headerColor);
      changeTextColor("email", headerColor);
      changeSiteBackgroundColor(headerBackColor);
    }

    if (window.pageYOffset >= headerHeight * 0.75) {
      changeTextColor("email", talkAndProgressColor);
      changeTextColor(
        projects_data.talk_and_progress_project_link,
        talkAndProgressColor
      );
      changeTextColor(
        projects_data.talk_and_progress_project_desc,
        talkAndProgressColor
      );

      changeSiteBackgroundColor(talkAndProgressBackColor);
    }

    if (window.pageYOffset >= headerHeight + talkAndProgressHeight * 0.75) {
      changeTextColor("email", archiveJohnshleeColor);
      changeTextColor(
        projects_data.archive_johnshlee_project_link,
        archiveJohnshleeColor
      );
      changeTextColor(
        projects_data.archive_johnshlee_project_desc,
        archiveJohnshleeColor
      );

      changeSiteBackgroundColor(archiveJohnshleeBackColor);
    }

    if (
      window.pageYOffset >=
      headerHeight + talkAndProgressHeight + archiveJohnshleeHeight * 0.75
    ) {
      changeTextColor("email", philosophightColor);
      changeTextColor(
        projects_data.philosophight_project_link,
        philosophightColor
      );
      changeTextColor(
        projects_data.philosophight_project_desc,
        philosophightColor
      );

      changeSiteBackgroundColor(philosophightBackColor);
    }

    if (
      window.pageYOffset >=
      headerHeight +
        talkAndProgressHeight +
        archiveJohnshleeHeight +
        philosophightHeight * 0.75
    ) {
      changeTextColor("email", postDesignFestivalColor);
      changeTextColor(
        projects_data.post_design_festival_project_link,
        postDesignFestivalColor
      );
      changeTextColor(
        projects_data.post_design_festival_project_desc,
        postDesignFestivalColor
      );

      changeSiteBackgroundColor(postDesignFestivalBackColor);
    }

    if (
      window.pageYOffset >=
      headerHeight +
        talkAndProgressHeight +
        archiveJohnshleeHeight +
        philosophightHeight +
        postDesignFestivalHeight * 0.75
    ) {
      changeTextColor("email", consciousBreakersColor);
      changeTextColor(
        projects_data.conscious_breakers_project_link,
        consciousBreakersColor
      );
      changeTextColor(
        projects_data.conscious_breakers_project_desc,
        consciousBreakersColor
      );

      changeSiteBackgroundColor(consciousBreakersBackColor);
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
      changeTextColor("email", aboutColor);
      changeTextColor("about", aboutColor);
      changeSiteBackgroundColor(aboutBackColor);
    }
  });
};
