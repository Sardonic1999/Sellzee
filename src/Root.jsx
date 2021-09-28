import React from "react";
import Navbar from "./Navbar/Navbar";
import Body from "./Body/Body";
import About from "./About/About";
import Number from "./Number/Number";

const Root = () => {
  return (
    <div>
      <Navbar />
      <Body />
      <About />
      <Number />
    </div>
  );
};

export default Root;
