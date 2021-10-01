import React from "react";
import Navbar from "./Navbar/Navbar";
import Body from "./Body/Body";
import About from "./About/About";
import Number from "./Number/Number";
import Card from "./Cards/Card";
import Review from "./Review/Review";
import Price from "./Price/Price";
import Letter from "./Newsletter/Letter";
import Footer from "./Footer/Footer";

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
      <Letter />
      <Footer />
    </div>
  );
};

export default Root;
