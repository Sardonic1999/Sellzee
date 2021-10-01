import React from "react";
import {
  Wrapper,
  Card1,
  Card2,
  Card3,
  WrapInput,
  Button,
} from "./Letter_Style";

const Letter = () => {
  return (
    <Wrapper>
      <Card3></Card3>
      <Card2></Card2>
      <Card1>
        <h4>NEWSLETTER</h4>
        <h1>
          We Offer Every Month 20% Off <br /> For Our All Subscribers
        </h1>
        <WrapInput>
          <input placeholder="Email" />
          <Button>Subscribe</Button>
        </WrapInput>
      </Card1>
    </Wrapper>
  );
};

export default Letter;
