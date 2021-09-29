import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1600px;
  height: fit-content;
  box-sizing: border-box;
  background: white;
  padding: 100px 230px;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;
  h1 {
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 49px;
    line-height: 120%;
    color: #05000b;
    margin: 0px;
  }
  p {
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 160%;
    text-align: center;
    color: #05000b;
    opacity: 0.7;
  }
`;

export const Container = styled.div`
  display: flex;
`;

export const Left = styled.div`
  flex: 1;
  h1 {
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 31px;
    line-height: 160%;
    padding-bottom: 100px;
    color: #05000b;
  }
`;

export const Card = styled.div`
  position: relative;
  width: 655px;
  height: 236px;
  background: #ffffff;
  padding: 30px;
  box-shadow: 13px 13px 31px rgba(0, 0, 0, 0.05);
  p {
    font-family: Inter;
    font-style: italic;
    font-weight: normal;
    font-size: 16px;
    line-height: 160%;
    color: #05000b;
    margin-top: 130px;
  }
`;

Card.Img = styled.div`
  display: flex;
  width: 200px;
  margin-left: auto;
`;

// export const WrapCardcha = styled.div``;

export const Cardcha = styled.div`
  display: flex;
  flex-direction: column;
  width: 373px;
  height: 129px;
  background: #ffffff;
  box-shadow: 13px 13px 31px rgba(0, 0, 0, 0.05);
  padding: 30px;
  box-sizing: border-box;
  position: absolute;
  left: 10px;
  top: -40px;
  h1 {
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 160%;
    margin: 0px;
    color: #05000b;
    padding: 0px;
  }
  p {
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 160%;
    color: #05000b;
    margin: 0px;
    opacity: 0.8;
  }
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 63px;
`;

Button.Btn = styled.button`
  width: 46px;
  height: 46px;
  margin-right: 10px;
  background: #ff5a05;
  color: white;
  cursor: pointer;
  border-radius: 62.5px 62.5px 62.5px 0px;
  transform: ${({ right }) => (right ? "none" : "matrix(-1, 0, 0, 1, 0, 0)")};
`;

export const Right = styled.div`
  flex: 1;
`;
