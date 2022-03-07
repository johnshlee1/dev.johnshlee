import React from "react";

import "./Header.style.css";

export const Header = () => (
  <header className="site-header">
    <div className="site-title">
      <h1>John Seung-Hwan Lee</h1>
      <h1>
        Front-end
        <br /> development
      </h1>
    </div>
    <span id="email" className="email">
      johnshlee1@gmail.com
    </span>
  </header>
);