import React from "react";
import { Wrapper, Recte, Container } from "./Number_Style";

const Number = () => {
  return (
    <Wrapper>
      <Container>
        <Recte>
          <h1>50+</h1>
          <p>Happy Clients</p>
        </Recte>
        <Recte>
          <h1>550+</h1>
          <p>Projects Completed</p>
        </Recte>
        <Recte>
          <h1>250+</h1>
          <p>Dedicated Members</p>
        </Recte>
        <Recte>
          <h1>30+</h1>
          <p>Awards Won</p>
        </Recte>
      </Container>
    </Wrapper>
  );
};

export default Number;
