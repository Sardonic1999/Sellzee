import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1600px;
  height: fit-content;
  box-sizing: border-box;
  background: #fff9f5;
  padding: 100px 0px;
`;

export const WrapPixel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Pixel = styled.div`
  width: 388px;
  height: 265px;
  /* background: #4252cf; */
  background: transparent;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 30px;
  h4 {
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 160%;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #ff5a05;
    margin: 0px;
  }
  h1 {
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 130%;
    color: #05000b;
    margin: 0px;
  }
  p {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 160%;
    color: #05000b;
    opacity: 0.7;
    margin: 0px;
  }
`;

export const CardPixel = styled.div`
  width: 358px;
  height: 265px;
  background: ${({ blue }) => (blue ? "#4252cf" : "#FFFFFF")};
  border-radius: 10px;
  border: 2px solid rgba(66, 82, 207, 0.1);
  box-sizing: border-box;
  border-radius: 10px;
  margin: 30px;
  cursor: pointer;

  padding: 30px;
  h1 {
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 160%;
    color: ${({ white }) => (white ? "#ffffff" : "black")};
  }
  p {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 160%;
    color: ${({ white }) => (white ? "#ffffff" : "black")};

    opacity: 0.8;
  }
`;
