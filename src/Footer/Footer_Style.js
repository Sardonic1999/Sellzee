import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 1600px;
  height: 450px;
  box-sizing: border-box;
  background: #000848;
  padding: 120px 250px;
  justify-content: space-around;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  h1 {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 160%;
    text-align: center;

    color: #ffffff;
  }
  li {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 160%;
    list-style-type: none;
    color: #ffffff;
    padding-bottom: 10px;
    opacity: 0.8;
    cursor: pointer;
  }
`;

export const Logo = styled.img``;

export const WrapIcon = styled.div`
  display: flex;
  padding-top: 30px;
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 40.5px;
  height: 40.5px;
  background: rgba(255, 255, 255, 0.29);
  backdrop-filter: blur(10px);
  margin-right: 15px;
`;
