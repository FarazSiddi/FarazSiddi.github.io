import React from "react";
import "./styles/about.css";

export const About = () => {
  return (
    <div id="about-me" className="bg-light">
      <div className="container ps-5 pt-5">
        <div className="row">
          <img
            id="headshoot"
            src={require("./images/Headshot-FarazSiddiqui_3.jpg")}
            className="col-md-5 border border-info border-5 rounded-circle me-5"
            alt="A headshot of myself wearing a gray jacket and black collared shirt."
          />
          <h1 className="col-md-8">Hi!</h1>
        </div>
        <p>
          I am currently a second year Applied Mathematics student with a
          specialization of Computer Science at Toronto Metropolitan University
          (formerly known as Ryerson University).
        </p>
      </div>
    </div>
  );
};
