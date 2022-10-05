import React from "react";
import "./styles/about.css";

export const About = () => {
  return (
    <div id="about-me" className="bg-light">
      <div className="container ps-5 pt-5">
        <div className="d-flex flex-row bd-highlight mb-3">
          <img
            id="headshoot"
            src={require("./images/Headshot-FarazSiddiqui_3.jpg")}
            className="bd-highlight border border-info border-5 rounded-circle me-5"
            alt="A headshot of myself wearing a gray jacket and black collared shirt."
          />
          <div className="d-flex flex-column bd-highlight mb-3">
            <h1 className="bd-highlight">Hi!</h1>
            <p className="bd-highlight">
              My name is Faraz Siddiqui. I am currently a second year Applied
              Mathematics student with a specialization of Computer Science at
              Toronto Metropolitan University (formerly known as Ryerson
              University). I love probem solving.
            </p>
            <p className="bd-highlight">Website and resume:</p>
          </div>
        </div>
      </div>
    </div>
  );
};
