import React from "react";
import "./styles/banner.css";

export const Banner = () => {
  return (
    <div id="banner" className="bg-success w-100 position-relative">
      <div className="position-absolute top-50 start-50 translate-middle text-center">
        <h1>Banner goes here</h1>
        <h2>And some more text</h2>
      </div>
    </div>
  );
};
