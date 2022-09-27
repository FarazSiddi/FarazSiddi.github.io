import React from "react";
import "./styles/banner.css";

export const Banner = () => {
  return (
    <div id="banner" className="position-relative">
      <div id="banner--center">
        <div id="banner--text" className="text-center px-5 py-5">
          <h1 id="text--top">Faraz Siddiqui</h1>
          <h3 id="text--bottom">Aspiring Full-Stack Developer</h3>
        </div>

        <div
          id="button-group"
          className="d-flex py-2 my-3 bd-highlight justify-content-between btn-group btn-group-lg"
          role="group"
        >
          <button className="btn btn-primary btn">View Resume</button>
          <button className="btn btn-secondary btn">Download Resume</button>
        </div>
      </div>
    </div>
  );
};
