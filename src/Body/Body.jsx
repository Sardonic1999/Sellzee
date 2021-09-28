import React from "react";
import {
  Wrapper,
  Left,
  Text,
  WrapButton,
  Button,
  Right,
  Img,
} from "./Body_Style";
import main from "../assets/images/main.png";

const Body = () => {
  return (
    <Wrapper>
      <Left>
        <Text>
          <h4>Inspiration Technology.</h4>
          <h1>
            Runs faster. <br />
            <span>
              Costs less and <br /> never breaks.
            </span>
          </h1>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit.
            Nulla sapien lectus sit tristique rhoncus, nisi, <br /> malesuada.
            Tellus consequat{" "}
          </p>
        </Text>
        <WrapButton>
          <Button background>Get Started</Button>
          <Button border>Free Trail</Button>
        </WrapButton>
      </Left>
      <Right>
        <Img src={main} />
      </Right>
    </Wrapper>
  );
};

export default Body;
