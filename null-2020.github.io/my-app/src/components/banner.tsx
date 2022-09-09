import React from "react";
import "./styles/banner.css";

export const Banner = () => {
  return (
    <div id="banner" className="bg-success w-100 position-relative">
      <img
        id="background-img"
        alt="Snowy mountains in a beautiful night sky"
        src={require("./images/teahub.io-snow-mountain-wallpaper-572052.jpg")}
      />
      <div
        id="banner--center"
        className="position-absolute top-50 start-50 translate-middle"
      >
        <div id="banner--text" className="text-center px-5 py-5">
          <h1 id="text--top">Faraz Siddiqui</h1>
          <h3 id="text--bottom">Full-Stack Developer</h3>
        </div>

        <button>View Resume</button>
        <button>Download Resume</button>
      </div>
    </div>
  );
};
