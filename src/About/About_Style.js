import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1600px;
  box-sizing: border-box;
  background: white;
  padding-top: 120px;
  padding-bottom: 100px;
`;

export const Company = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;

export const CompCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 261px;
  height: 82px;
  margin-right: 30px;
  background: #ffffff;
  box-shadow: 1px 4px 12px rgba(0, 0, 0, 0.08);
`;

export const WrapSide = styled.div`
  display: flex;
  margin-top: 121px;
`;

export const Left = styled.div`
  flex: 1;
  position: relative;
  padding-left: 65px;
`;

export const Img3 = styled.img`
  width: 515.34px;
  height: 454.28px;
  border-radius: 10px;
`;

export const Card = styled.div`
  position: absolute;
  width: 397.34px;
  height: 201.67px;
  background: #ffffff;
  box-shadow: 20px 30px 70px rgba(3, 7, 37, 0.06);
  border-radius: 10px;
  left: 358.64px;
  top: 300px;
  padding: 20px 30px;
  p {
    font-family: Inter;
    font-style: normal;
    font-weight: 300;
    font-size: 20.1118px;
    line-height: 25px;

    color: #404040;
  }
`;

export const Circle = styled.div`
  display: flex;

  img {
    width: 42.14px;
    height: 42.14px;
    opacity: 0.8;
    border-radius: 50%;
  }
`;

Circle.Contact = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 12px;
  p {
    margin: 0px;
    font-family: Suprema;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    color: #404040;
    text-align: center;
  }
`;

Card.Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
  box-sizing: border-box;
`;

Card.Input = styled.div`
  input {
    width: 175.32px;
    height: 36.52px;
    background: #ffffff;
    border: 1px solid #1f37ff;
    border-radius: 8px;
  }
`;

Card.Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 131.59px;
  height: 36.52px;
  background: #ff5a05;
  border-radius: 4px;
  margin-left: 10px;
  cursor: pointer;
  color: white;
`;

export const Right = styled.div`
  flex: 1;
  padding-left: 120px;
`;

export const Title = styled.div`
  h4 {
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 160%;
    text-transform: uppercase;

    color: #ff5a05;

    opacity: 0.8;
  }
  h1 {
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 49px;
    line-height: 120%;
    color: #05000b;
  }
  p {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 160%;
    color: #05000b;

    opacity: 0.7;
  }
`;

export const Checker = styled.div`
  display: flex;
`;

Checker.Card = styled.div`
  display: flex;
  margin-right: 40px;
  p {
    margin-left: 10px;
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 160%;
    color: #05000b;
  }
`;

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 169px;
  height: 62px;
  background: #ff5a05;
  border-radius: 4px;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 160%;
  color: #ffffff;
  cursor: pointer;
  margin-top: 50px;
`;
