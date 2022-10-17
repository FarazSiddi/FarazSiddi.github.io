import React from "react";
import "./styles/skills.css";

export const Skills = () => {
  return (
    <div id="skills">
      <h3>Skills:</h3>
      <h4>Programming Languages:</h4>
      <div className="container">
        <div className="row">
          <button className="col buttons">Python</button>
          <button className="col buttons">JavaScript and TypeScript</button>
          <button className="col buttons">Java</button>
        </div>
        <div className="row">
          <button className="col buttons">Bash</button>
          <button className="col buttons">C++</button>
          <button className="col buttons">Rust</button>
        </div>
      </div>
    </div>
  );
};
