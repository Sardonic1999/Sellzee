import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1600px;
  height: fit-content;
  box-sizing: border-box;
  background: #ebedff;
  padding-bottom: 100px;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2 {
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 31px;
    line-height: 160%;
    text-align: center;
    color: #05000b;
  }
`;

Text.Button = styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-around;
  align-items: center;
  padding: 15px 25px;
  width: 357px;
  height: 86px;
  background: #ffffff;
  border-radius: 10px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 148px;
  height: 56px;
  background: ${({ month }) => (month ? "#ff5a05" : "rgba(255, 90, 5, 0.1)")};
  border-radius: 10px;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 160%;
  color: ${({ month }) => (month ? "#ffffff" : "#FF5A05")};
  cursor: pointer;
`;

export const WrapCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

export const Card = styled.div`
  width: 455px;
  height: 670.5px;
  margin-right: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #ffffff;
  border: 1px solid rgba(31, 55, 255, 0.1);
  border-radius: 10px;
  position: relative;
  box-sizing: border-box;
  p {
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 31px;
    line-height: 160%;
    text-align: center;
    margin: 0px;
    color: #05000b;
  }
  h1 {
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 96.3951px;
    line-height: 120%;
    text-align: center;
    margin: 0px;

    color: #1f37ff;
  }
  h6 {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 160%;
    text-align: center;
    margin: 0px;
    padding-bottom: 20px;
    color: #05000b;
  }
`;

Card.Top = styled.img`
  width: 201.78px;
  height: 109.5px;
  margin-top: -10px;
`;

Card.Icon = styled.img`
  position: absolute;
  left: 210px;
  top: 20px;
  color: red;
`;

export const Lili = styled.div`
  display: flex;

  p {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 160%;
    text-align: center;
    margin: 0px;
    padding-bottom: 14px;
    color: #05000b;
  }
`;

export const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 335px;
  height: 58px;
  background: #ff5a05;
  border-radius: 10px;
  color: white;
  margin-top: 70px;
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 160%;
  text-align: center;

  color: #ffffff;
`;
