import styled from "styled-components";
import rec from "../assets/images/rec.png";

export const Wrapper = styled.div`
  display: flex;
  width: 1600px;
  box-sizing: border-box;
  background: linear-gradient(blue, white);
`;
export const Container = styled.div`
  display: flex;
  padding: 180px 230px;
`;

export const Recte = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${rec});
  width: 261px;
  height: 371px;
  cursor: pointer;
  box-sizing: border-box;
  margin-right: 30px;

  h1 {
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 55px;
    line-height: 120%;
    text-align: center;
    margin: 0px;
    color: #1f37ff;
    padding-bottom: 30px;
  }
  p {
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 160%;
    color: #05000b;
    margin: 0px;
    opacity: 0.7;
  }
`;
