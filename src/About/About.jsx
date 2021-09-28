import React from "react";
import {
  Btn,
  Card,
  Checker,
  Circle,
  Company,
  CompCard,
  Img3,
  Left,
  Right,
  Title,
  Wrapper,
  WrapSide,
} from "./About_Style";
import fedex from "../assets/images/fedex.png";
import google from "../assets/images/google.png";
import ola from "../assets/images/ola.png";
import microsoft from "../assets/images/microsoft.png";
import amazon from "../assets/images/amazon.png";
import fedx from "../assets/images/fedx.png";
import walmart from "../assets/images/walmart.png";
import main2 from "../assets/images/main2.png";
import check from "../assets/icons/check.svg";
const About = () => {
  return (
    <Wrapper>
      <Company>
        <CompCard>
          <img src={fedex} alt="" />
        </CompCard>
        <CompCard>
          <img src={google} alt="" />
        </CompCard>
        <CompCard>
          <img src={ola} alt="" />
        </CompCard>
        <CompCard>
          <img src={microsoft} alt="" />
        </CompCard>
      </Company>
      <Company>
        <CompCard>
          <img src={amazon} alt="" />
        </CompCard>
        <CompCard>
          <img src={fedx} alt="" />
        </CompCard>
        <CompCard>
          <img src={walmart} alt="" />
        </CompCard>
      </Company>
      <WrapSide>
        <Left>
          <Img3 src={main2} alt="" />
          <Card>
            <p>New transaction</p>
            <Circle>
              <Circle.Contact>
                <img src={main2} alt="" />
                <p>Andy</p>
              </Circle.Contact>
              <Circle.Contact>
                <img src={main2} alt="" />
                <p>Andy</p>
              </Circle.Contact>
              <Circle.Contact>
                <img src={main2} alt="" />
                <p>Andy</p>
              </Circle.Contact>
              <Circle.Contact>
                <img src={main2} alt="" />
                <p>Andy</p>
              </Circle.Contact>
              <Circle.Contact>
                <img src={main2} alt="" />
                <p>Andy</p>
              </Circle.Contact>
            </Circle>
            <Card.Container>
              <Card.Input>
                <input type="text" />
              </Card.Input>
              <Card.Button>Send the transfer</Card.Button>
            </Card.Container>
          </Card>
        </Left>
        <Right>
          <Title>
            <h4>Lorem ipsum dolor sit ame</h4>
            <h1>
              Simple Solutions for <br /> Complex Connections
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec{" "}
              <br />
              gravida feugiat neque, ipsum faucibus. Pharetra vel suspendisse mi{" "}
              <br />
              odio a velit feugiat sapien.
            </p>
          </Title>
          <Checker>
            <Checker.Card>
              <img src={check} alt="" />
              <p>High Analysis</p>
            </Checker.Card>
            <Checker.Card>
              <img src={check} alt="" />
              <p>Certified Institutes</p>
            </Checker.Card>
          </Checker>
          <Btn>Learn More</Btn>
        </Right>
      </WrapSide>
    </Wrapper>
  );
};

export default About;
