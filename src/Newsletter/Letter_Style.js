import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1600px;
  height: fit-content;
  box-sizing: border-box;
  background: white;
  padding: 200px;
  position: relative;
`;

export const Card1 = styled.div`
  width: 1200px;
  box-sizing: border-box;
  height: 405px;
  background: #fdeee7;
  border-radius: 30px;
  top: 100px;
  z-index: 999;
  padding: 50px 280px;
  h4 {
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 160%;
    text-align: center;
    letter-spacing: 0.1em;

    color: #ff5a05;
  }
  h1 {
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 39px;
    line-height: 130%;
    text-align: center;

    color: #05000b;
  }
`;

export const Card2 = styled.div`
  position: absolute;
  width: 1118.99px;
  height: 405px;
  background: #fdeee7;
  opacity: 0.4;
  border-radius: 30px;
  top: 150px;
`;

export const Card3 = styled.div`
  position: absolute;
  width: 990.92px;
  height: 386.11px;
  background: #fdeee7;
  opacity: 0.3;
  border-radius: 30px;
  top: 100px;
`;

export const WrapInput = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  input {
    width: 562px;
    height: 77px;
    border: 1px solid rgba(5, 0, 11, 0.1);
    box-sizing: border-box;
    border-radius: 4px;
    background: transparent;
    padding-left: 20px;
    padding-right: 220px;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 160%;

    color: #a6a6a6;
  }
`;

export const Button = styled.button`
  position: absolute;
  width: 184px;
  height: 53px;
  left: 400px;
  top: 10px;

  background: #ff5a05;
  border-radius: 4px;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 160%;
  text-align: center;

  color: #ffffff;
`;
