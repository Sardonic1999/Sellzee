import React from "react";
import Navbar from "./Navbar/Navbar";
import Body from "./Body/Body";
import About from "./About/About";
import Number from "./Number/Number";
import Card from "./Cards/Card";
import Review from "./Review/Review";
import Price from "./Price/Price";

const Root = () => {
  return (
    <div>
      <Navbar />
      <Body />
      <About />
      <Number />
      <Card />
      <Review />
      <Price />
    </div>
  );
};

export default Root;
