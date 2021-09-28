import React from "react";
import { Button, Logo, Pages, Wrapper } from "./Navbar_Style";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <Wrapper>
      <Logo src={logo} />
      <Pages>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Testimonial</li>
        <li>Priceing</li>
      </Pages>
      <Button>Get Started</Button>
    </Wrapper>
  );
};

export default Navbar;
