import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 1600px;
  box-sizing: border-box;
  background: linear-gradient(264.47deg, #2e43f0 29.39%, #6677ff 93.49%);
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid red; */
  padding: 82px 80px 161px 230px;
`;

export const Text = styled.div`
  h4 {
    font-family: Inter;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 160%;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin: 0px;
    color: #ffffff;
    margin-bottom: 15px;
  }
  h1 {
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 61px;
    line-height: 120%;
    margin: 0px;
    color: #ffffff;
    margin-bottom: 20px;

    span {
      font-family: Inter;
      font-style: normal;
      font-weight: normal;
      font-size: 50px;
      line-height: 120%;
      margin: 0px;
      color: #ffffff;
    }
  }
  p {
    font-family: Inter;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 160%;
    color: #ffffff;
    margin: 0px;
    opacity: 0.7;
    margin: 20px 0;
  }
`;

export const WrapButton = styled.div`
  display: flex;
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 172px;
  height: 62px;
  margin: 40px 50px 40px 0px;
  cursor: pointer;
  font-family: Inter;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 160%;
  color: #ffffff;
  background: ${({ background }) => background && "#ff5a05"};
  border-radius: 4px;
  border: ${({ border }) => border && "1px solid white"};
`;

export const Right = styled.div``;

export const Img = styled.img`
  width: 811.56px;
  height: 589.25px;
  margin: 50px 70px 50px 0px;
`;
