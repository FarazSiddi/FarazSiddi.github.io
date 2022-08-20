import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { Header } from "./components/header";
import { Main } from "./components/main";
import { Footer } from "./components/footer";

export const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};
export default App;
