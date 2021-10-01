import React from "react";
import { Container, Icons, Logo, WrapIcon, Wrapper } from "./Footer_Style";
import logo from "../assets/images/logo.png";
import facebook from "../assets/icons/facebook.svg";
import twitter from "../assets/icons/twitter.svg";
import insta from "../assets/icons/insta.svg";
import you from "../assets/icons/you.svg";

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Logo src={logo} />
        <WrapIcon>
          <Icons>
            <img src={facebook} alt="" />
          </Icons>
          <Icons>
            <img src={twitter} alt="" />
          </Icons>
          <Icons>
            <img src={insta} alt="" />
          </Icons>
          <Icons>
            <img src={you} alt="" />
          </Icons>
        </WrapIcon>
      </Container>
      <Container>
        <h1>SHORT LINKS</h1>
        <li>Home</li>
        <li>Services</li>
        <li>Screenshots</li>
        <li>Contact</li>
      </Container>
      <Container>
        <h1>HELP LINKS</h1>
        <li>Home</li>
        <li>Services</li>
        <li>Screenshots</li>
        <li>Contact</li>
      </Container>
      <Container>
        <h1>SHORT LINKS</h1>
        <li>Home</li>
        <li>Services</li>
        <li>Screenshots</li>
        <li>Contact</li>
      </Container>
    </Wrapper>
  );
};

export default Footer;
