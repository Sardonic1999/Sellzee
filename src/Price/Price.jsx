import React from "react";
import {
  Btn,
  Button,
  Card,
  Lili,
  Text,
  WrapCard,
  Wrapper,
} from "./Price_Style";
import tri from "../assets/icons/tri.svg";
import fire from "../assets/icons/fire.svg";
import heart from "../assets/icons/heart.svg";
import check from "../assets/icons/check.svg";

const Price = () => {
  return (
    <Wrapper>
      <Text>
        <h2>
          Without Extra Charge Choose <br /> Your Best Plan
        </h2>
        <Text.Button>
          <Button month>Monthly</Button>
          <Button>Yearly</Button>
        </Text.Button>
      </Text>
      <WrapCard>
        <Card>
          <Card.Top src={tri} alt="" />
          <Card.Icon src={fire} alt="" />
          <p>Standard</p>
          <h1>$29</h1>
          <h6>monthly pack</h6>
          <Lili>
            <img src={check} alt="" />
            <p>256 GB SSD STORE</p>
          </Lili>
          <Lili>
            <img src={check} alt="" />
            <p>256 GB SSD STORE</p>
          </Lili>
          <Lili>
            <img src={check} alt="" />
            <p>256 GB SSD STORE</p>
          </Lili>
          <Lili>
            <img src={check} alt="" />
            <p>256 GB SSD STORE</p>
          </Lili>
          <Lili>
            <img src={check} alt="" />
            <p>256 GB SSD STORE</p>
          </Lili>
          <Btn>Install Pack</Btn>
        </Card>
        <Card>
          <Card.Top src={tri} alt="" />
          <Card.Icon src={heart} alt="" />
          <p>Standard</p>
          <h1>$39</h1>
          <h6>monthly pack</h6>
          <Lili>
            <img src={check} alt="" />
            <p>256 GB SSD STORE</p>
          </Lili>
          <Lili>
            <img src={check} alt="" />
            <p>256 GB SSD STORE</p>
          </Lili>
          <Lili>
            <img src={check} alt="" />
            <p>256 GB SSD STORE</p>
          </Lili>
          <Lili>
            <img src={check} alt="" />
            <p>256 GB SSD STORE</p>
          </Lili>
          <Lili>
            <img src={check} alt="" />
            <p>256 GB SSD STORE</p>
          </Lili>
          <Btn>Install Pack</Btn>
        </Card>
      </WrapCard>
    </Wrapper>
  );
};

export default Price;
