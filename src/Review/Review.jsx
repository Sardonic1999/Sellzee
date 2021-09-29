import React from "react";
import {
  Wrapper,
  Text,
  Container,
  Left,
  Right,
  Card,
  Cardcha,
  Button,
} from "./Review_Style";
import star from "../assets/icons/star.svg";
import main3 from "../assets/images/main3.png";

const Review = () => {
  return (
    <Wrapper>
      <Text>
        <h1>User’s Review</h1>
        <p>
          Collaborate over projects with your team and clients optimised <br />{" "}
          for mobile and tablet don't let slow
        </p>
      </Text>
      <Container>
        <Left>
          <h1>What People Say About Us</h1>
          <Card>
            <Cardcha>
              <h1>Davit millar</h1>
              <p>CEO, PParkivew int, Ltd</p>
            </Cardcha>
            <Card.Img>
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </Card.Img>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit nisl,{" "}
              <br />
              tincidunt commodo sit. Et, purus lectus odio cursus placerat leo,
              <br />
              non etiam. Neque at leo risus orci,{" "}
            </p>
          </Card>
          <Button>
            <Button.Btn>{">"}</Button.Btn>
            <Button.Btn right>{">"}</Button.Btn>
          </Button>
        </Left>
        <Right>
          <img src={main3} alt="" />
        </Right>
      </Container>
    </Wrapper>
  );
};

export default Review;
