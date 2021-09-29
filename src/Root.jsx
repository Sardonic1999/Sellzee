import React from "react";
import Navbar from "./Navbar/Navbar";
import Body from "./Body/Body";
import About from "./About/About";
import Number from "./Number/Number";
import Card from "./Cards/Card";
import Review from "./Review/Review";

const Root = () => {
  return (
    <div>
      <Navbar />
      <Body />
      <About />
      <Number />
      <Card />
      <Review />
    </div>
  );
};

export default Root;
