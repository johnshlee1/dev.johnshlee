import React from "react";
import "./About.style.css";

export const AboutPage = ({ color, backgroundColor }) => (
  <div
    id="about"
    className="about-page-container"
    data-color={color}
    data-backcolor={backgroundColor}
  >
    <div className="about-text">
      Lee was born in Austin, Texas, but grew up in South Korea since he was
      three until fifteen. For higher education, he moved to the US to study,
      first to California in high school, then to New York in university. For
      various reasons, throughout his life he never stayed in one residence for
      more than three years. <br />
      <br />
      Growing up, he learned Korean as the first language. It wasn’t until after
      he moved to the US that he realized South Korea has a self-estranging
      culture in admiration for and self-shaming ignorance in English. When he
      made periodic visits to South Korea, his childhood friends admired his
      fluency in English with tongue curling American accent.
    </div>

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
          <a className="formal-settings-url" href="http://formal-settings.com">
            Formal Settings
          </a>
          <span class="north-east-arrow">&#10132;</span>
        </div>
      </div>
    </div>
  </div>
);
