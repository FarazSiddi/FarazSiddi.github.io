import React from "react";
import "./styles/about.css";

export const About = () => {
  return (
    <div id="about-me" className="bg-light">
      <div className="container ps-5 pt-5 align-middle">
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
              University). I love to solve many problems, whether it has to do
              with coding, mathematics, algorithms, and more. I love to code in
              Python, Java, and JavaScript/TypeScript, as well has having plans
              to get familiar with C++ and Rust in the near future. Furthermore,
              I am open to learn new things as well as working on interesting
              projects. Feel free to reach out to me via e-mail or LinkedIn.
            </p>
            <p className="bd-highlight">Portfolio: null-2020.github.io</p>
            <p className="bd-highlight">GitHub: github.com/null-2020</p>
            <p className="bd-highlight">
              Linkedin: linkedin.com/faraz-siddiqui-r
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
