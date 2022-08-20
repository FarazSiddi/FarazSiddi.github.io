import React from "react";
import { Navbar } from "./navbar";
import { Banner } from "./banner";

export const Header = () => {
  return (
    <header>
      <Navbar />
      <Banner />
      {/* <h1>Header</h1> */}
    </header>
  );
};
